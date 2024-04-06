import { Controller, Get, Query } from '@nestjs/common';
import { ApiProperty, ApiQuery } from '@nestjs/swagger';
import { BlackSpotStatsService } from './stats.service';

export class BlackSpotGet10kmDTO {
  @ApiProperty()
  longitude: number;

  @ApiProperty()
  latitude: number;
}

@Controller('blackspots/stats')
export class BlackSpotStatsController {
  constructor(
    private readonly statsService: BlackSpotStatsService,
  ) {}

  @Get('/in10km')
  @ApiQuery({
    name: "latitude",
    required: true
  })
  @ApiQuery({
    name: "longitude",
    required: true
  })
  async in10km(@Query("longitude") longitude: number, @Query("latitude") latitude: number){
    return this.statsService.in10km(longitude, latitude);
  }

}