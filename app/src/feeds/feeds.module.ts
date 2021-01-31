import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedsController } from './feeds.controller';
import { FeedsService } from './feeds.service';
import { FeedSchema } from './schemas/feed.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Feed', schema: FeedSchema }]),
    HttpModule,
  ],
  controllers: [FeedsController],
  providers: [FeedsService],
})
export class FeedsModule {}
