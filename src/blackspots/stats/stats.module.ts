import { Module } from '@nestjs/common';
import { BlackSpotStatsController } from './stats.controller';
import { BlackSpotStatsService } from './stats.service';

@Module({
  providers: [BlackSpotStatsService],
  controllers: [BlackSpotStatsController]
})
export class BlackSpotStatsModule {}