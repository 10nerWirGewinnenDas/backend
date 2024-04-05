import { Module } from '@nestjs/common';
import { BlackSpotsService } from './blackspots.service';
import { BlackSpotsController } from './blackspots.controller';
import { BlackSpotsCommentsModule } from './comments/comments.module';
import { BlackSpotStatsModule } from './stats/stats.module';

@Module({
  imports: [BlackSpotsCommentsModule, BlackSpotStatsModule],
  providers: [BlackSpotsService],
  controllers: [BlackSpotsController]
})
export class BlackspotsModule {}
