import { HttpService, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FeedDto } from './dto/feed.dto';
import { Feed, FeedDocument } from './schemas/feed.schema';

@Injectable()
export class FeedsService {
  constructor(
    @InjectModel(Feed.name) private readonly feedModel: Model<FeedDocument>,
    private readonly httpClient: HttpService,
  ) {}

  async findFeeds(): Promise<Feed[]> {
    return this.feedModel.find().exec();
  }

  async createFeed(createFeedDto: FeedDto): Promise<Feed> {
    const createdFeed = new this.feedModel(createFeedDto);
    return createdFeed.save();
  }

  async editFeed(feedId: string, updateFeedDto: FeedDto): Promise<void> {
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
}
