import { Controller, Get, Query } from '@nestjs/common';
import {ApiOkResponse, ApiProperty, ApiQuery} from '@nestjs/swagger';
import { BlackSpotStatsService } from './stats.service';
import {GetBlackSpotDto} from "../dto/blackspots.dto";

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
  @ApiOkResponse({
    type: [GetBlackSpotDto]
  })
  async in10km(@Query("longitude") longitude: number, @Query("latitude") latitude: number){
    return this.statsService.in10km(longitude, latitude);
  }

}