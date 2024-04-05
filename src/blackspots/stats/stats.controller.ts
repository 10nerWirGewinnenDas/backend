import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ApiProperty, ApiQuery } from '@nestjs/swagger';

export class BlackSpotGet10kmDTO {
  @ApiProperty()
  longitude: number;

  @ApiProperty()
  latitude: number;
}

@Controller('blackspots/stats')
export class BlackSpotStatsController {
  constructor(
    private readonly prisma: PrismaService
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
    //get all blackspots in 10km radius with already given longitude and latitude:

    const bs = await this.prisma.blackSpot.findMany({
      where: {
        latitude: {
          gte: parseFloat(String(latitude - 0.1)),
          lte: parseFloat(String(latitude + 0.1))
        },
        longitude: {
          gte: parseFloat(String(longitude - 0.1)),
          lte: parseFloat(String(longitude + 0.1))
        }
      },
      orderBy: {
        votes: {
          _count: 'desc'
        }
      }
    });

    bs.slice(0,3);

    return bs;
  }

}