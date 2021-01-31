import {
  HttpException,
  HttpService,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FeedDto } from './dto/feed.dto';
import { Feed, FeedDocument, NewspaperSources } from './schemas/feed.schema';
import * as cheerio from 'cheerio';

@Injectable()
export class FeedsService {
  constructor(
    @InjectModel(Feed.name) private readonly feedModel: Model<FeedDocument>,
    private readonly httpClient: HttpService,
  ) {}

  async getOne(id: string) {
    const feed = await this.feedModel.findById(id);
    if (!feed) {
      throw new HttpException("Couldn't find this feed", HttpStatus.NOT_FOUND);
    }
    return feed;
  }

  async findFeeds(): Promise<Feed[]> {
    let feeds = await this.triggerScrapper(NewspaperSources.elpais);
    feeds = feeds.concat(await this.triggerScrapper(NewspaperSources.elmundo));
    return this.feedModel.find().exec();
  }

  async createFeed(createFeedDto: FeedDto): Promise<Feed> {
    const createdFeed = new this.feedModel(createFeedDto);
    return createdFeed.save();
  }

  async editFeed(feedId: string, updateFeedDto: FeedDto): Promise<void> {
    await this.getOne(feedId);
    await this.feedModel.updateOne(
      {
        _id: feedId,
      },
      updateFeedDto,
    );
  }

  async deleteFeed(feedId: string) {
    await this.feedModel.deleteOne({ _id: feedId });
  }

  async triggerScrapper(source: string): Promise<Feed[]> {
    const get = await this.httpClient.get(source).toPromise();
    const $ = cheerio.load(get.data);

    if (source === NewspaperSources.elmundo) {
      const searchResults = $('div.ue-l-cover-grid__block').find('article');

      const news: Feed[] = searchResults
        .map((idx, el) => {
          if (idx < 5) {
            const elementSelector = $(el);
            return this.elMundoScrapper(elementSelector);
          }
        })
        .get();
      return news;
    }
    if (source === NewspaperSources.elpais) {
      const searchResults = $('div.b__2--right').find('article');
      const news: Feed[] = searchResults
        .map((idx, el) => {
          if (idx < 5) {
            const elementSelector = $(el);
            return this.elPaisScrapper(elementSelector);
          }
        })
        .get();
      return news;
    }
    return null;
  }

  elPaisScrapper(html: any): Feed {
    const title = html.find('h2 > a').html();
    const description = html.find('p.description').html();
    const author = html.find('a.author').text().trim();
    const image = html.find('img').attr('src');

    return {
      title: title,
      source: NewspaperSources.elpais,
      publisher: author,
      body: description,
      image: image,
    };
  }

  elMundoScrapper(html: any): Feed {
    const title = html.find('h2.ue-c-cover-content__headline').html();
    const description = html
      .find('li.ue-c-cover-content__related-link > a')
      .text()
      .trim();
    const author = html
      .find('span.ue-c-cover-content__byline-name')
      .text()
      .trim();
    let image = html.find('source').attr('srcset');
    if (image) {
      image = image.split(',').pop(); //they ve different images with differernt sizes so we get ther bigger(last one)
    }

    return {
      title: title,
      source: NewspaperSources.elmundo,
      publisher: author,
      body: description,
      image: image,
    };
  }
}
