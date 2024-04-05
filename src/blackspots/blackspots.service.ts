import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {Cron} from "@nestjs/schedule";
import { VoteType } from '@prisma/client';

@Injectable()
export class BlackSpotsService {
  constructor(
    private readonly prisma: PrismaService
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
      }
    });
  }

  async create(data: {latitude: number, longitude: number}){

  }

  async vote(blackSpotId: string, voterId: string, voteType: VoteType){
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
