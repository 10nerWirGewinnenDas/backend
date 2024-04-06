import { BadRequestException, Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {Cron} from "@nestjs/schedule";
import {VoteType} from "@prisma/client";
import { CreateBlackSpotDto } from './dto/blackspots.dto';
import { Response as Res } from 'express';
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class BlackSpotsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  async findAll(){
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return this.prisma.blackSpot.findMany({
      where: {
        votes: {
          some: {
            createdAt: {
              gte: thirtyDaysAgo
            }
          }
        }
      },
      include: {
        _count: {
          select: {
            votes: {
              where: {
                type: VoteType.UP,
                createdAt: {
                  gte: thirtyDaysAgo
                }
              }
            }
          }
        },
        comments: true
      }
    });
  }

  async create(dto: CreateBlackSpotDto, res: Res){
    const spot = await this.prisma.blackSpot.create({
      data: {
        name: dto.name,
        description: dto.description,
        longitude: dto.longitude,
        latitude: dto.latitude,
        votes: {
          create: {
            type: VoteType.UP,
            voterId: dto.voterId
          }
        },
        category: {
          connect: {
            id: dto.categoryId
          }
        },
        archived: false,
        finished: false
      },
      include: {
        votes: true
      }
    })

    const token = this.jwtService.sign({type: "imageUpload", id: spot.id});

    return res.set({'X-Upload-Token': token, 'Access-Control-Expose-Headers': 'X-Upload-Token'}).json(spot);
  }

  async vote(blackSpotId: string, voterId: string, voteType: VoteType){
    const existingVoteWithUserID = await this.prisma.vote.findFirst({
      where: {
        spotId: blackSpotId,
        voterId
      }
    });

    if (existingVoteWithUserID) {
      throw new BadRequestException('User already voted')
    }

    const blackSpot = await this.prisma.blackSpot.findUnique({
      where: {
        id: blackSpotId
      }
    });

    if(!blackSpot){
      throw new Error('BlackSpot not found');
    }

    return this.prisma.vote.create({
      data: {
        spot: {
          connect: {
            id: blackSpotId
          }
        },
        voterId,
        createdAt: new Date(),
        type: voteType
      }
    })
  }

  async removeVotes(blackSpotId: string, voterId: string){
    return this.prisma.vote.deleteMany({
      where: {
        spotId: blackSpotId,
        voterId
      }
    })
  }


  @Cron("0 1 * * * *")
  async cleanup(){
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    return this.prisma.blackSpot.deleteMany({
      where: {
        votes: {
          none: {
            createdAt: {
              gte: thirtyDaysAgo
            }
          }
        }
      }
    })
  }
}
