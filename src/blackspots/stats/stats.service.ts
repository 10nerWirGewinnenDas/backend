import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BlackSpotStatsService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async in10km(longitude: number, latitude: number){
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