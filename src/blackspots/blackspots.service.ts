import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {Cron} from "@nestjs/schedule";

@Injectable()
export class BlackspotsService {
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
