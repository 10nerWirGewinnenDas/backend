import {Body, Controller, Get, Post} from '@nestjs/common';
import {BlackSpotsService} from "./blackspots.service";
import {CreateUpvoteDto} from "./dto/upvotes.dto";
import {PrismaService} from "../prisma/prisma.service";
import {BlackSpotCreatedDto, CreateBlackSpotDto, GetBlackSpotDto} from "./dto/blackspots.dto";
import {ApiOkResponse} from "@nestjs/swagger";
import {v4} from "uuid";
import {VoteType} from "@prisma/client";

@Controller('blackspots')
export class BlackSpotsController {
  constructor(
    private readonly blackSpotsService: BlackSpotsService,
    private readonly prisma: PrismaService
  ) {}

  @Get()
  @ApiOkResponse({
    type: GetBlackSpotDto
  })
  findAll(){
    return this.blackSpotsService.findAll();
  }

  @Post()
  @ApiOkResponse({
    type: BlackSpotCreatedDto
  })
  create(@Body() dto: CreateBlackSpotDto){
    return this.prisma.blackSpot.create({
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
        }
      },
      include: {
        votes: true
      }
    })
  }

  @Post(":id/votes")
  vote(@Body() dto: CreateUpvoteDto){
    // ToDo: add vote to blackSpot

  }


}
