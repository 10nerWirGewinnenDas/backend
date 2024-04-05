import { Module } from '@nestjs/common';
import { BlackSpotCommentsService } from './comments.service';
import { BlackSpotCommentsController } from './comments.controller';

@Module({
  providers: [BlackSpotCommentsService],
  controllers: [BlackSpotCommentsController]
})
export class BlackSpotsCommentsModule {}
