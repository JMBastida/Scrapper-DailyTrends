import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedsModule } from './feeds/feeds.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/feeds'), FeedsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
