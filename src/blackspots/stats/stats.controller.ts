import { Body, Controller, Get } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ApiProperty } from '@nestjs/swagger';

export class BlackSpotGet10kmDTO {
  @ApiProperty()
  longitude: number;

  @ApiProperty()
  latitude: number;
}

@Controller('blackspots/stats')
export class BlackSpotStatsController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  @Get('/blackspotsIn10km')
  async blackspotsIn10km(@Body() dto: BlackSpotGet10kmDTO){
    //get all blackspots in 10km radius with already given longitude and latitude:

    const bs = await this.prisma.blackSpot.findMany({
      where: {
        latitude: {
          gte: dto.latitude - 0.1,
          lte: dto.latitude + 0.1
        },
        longitude: {
          gte: dto.longitude - 0.1,
          lte: dto.longitude + 0.1
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