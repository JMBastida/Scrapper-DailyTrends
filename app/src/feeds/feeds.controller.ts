/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FeedDto } from './dto/feed.dto';
import { FeedsService } from './feeds.service';
import { Feed } from './schemas/feed.schema';

@ApiTags('Feeds')
@Controller('feeds')
export class FeedsController {
  constructor(private readonly feedsService: FeedsService) {}

  @Get()
  async findFeeds(): Promise<Feed[]> {
    return await this.feedsService.findFeeds();
  }

  @Post()
  async createFeed(@Body() createFeedDto: FeedDto): Promise<Feed> {
    return await this.feedsService.createFeed(createFeedDto);
  }

  @Put(':feedId')
  async editFeed(
    @Param('feedId')
    id: string,
    @Body() updateFeedDto: FeedDto,
  ): Promise<void> {
    await this.feedsService.editFeed(id, updateFeedDto);
  }

  @Delete(':feedId')
  async removeFeed(
    @Param('feedId')
    id: string,
  ): Promise<void> {
    await this.feedsService.deleteFeed(id);
  }
}
