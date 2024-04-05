import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import {BlackSpotsService} from "./blackspots.service";
import {PrismaService} from "../prisma/prisma.service";
import {BlackSpotCreatedDto, CreateBlackSpotDto, GetBlackSpotDto} from "./dto/blackspots.dto";
import {ApiOkResponse, ApiProperty, ApiQuery} from "@nestjs/swagger";
import {VoteType} from "@prisma/client";
import {CreateVoteDto, GetVoteDto} from './dto/upvotes.dto';

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
  @ApiQuery({
    name: "topLeftLat",
    required: false
  })
  @ApiQuery({
    name: "topLeftLng",
    required: false
  })
  @ApiQuery({
    name: "bottomRightLat",
    required: false
  })
  @ApiQuery({
    name: "bottomRightLng",
    required: false
  })
  findAll(@Query("topLeftLat") topLeftLat?: number, @Query("topLeftLng") topLeftLng?: number, @Query("bottomRightLat") bottomRightLat?: number, @Query("bottomRightLng") bottomRightLng?: number){
    if(topLeftLat){
      return this.prisma.blackSpot.findMany({
        where: {
          latitude: {
            gte: bottomRightLat,
            lte: topLeftLat
          },
          longitude: {
            gte: topLeftLng,
            lte: bottomRightLng
          }
        }
      });
    }else{
      return this.blackSpotsService.findAll();
    }
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
  }

  @Post(":id/vote")
  @ApiOkResponse({
    type: GetVoteDto
  })
  vote(@Body() dto: CreateVoteDto){
    return this.blackSpotsService.vote(dto.blackSpotId, dto.voterId, dto.type);
  }

  @Get(":id/unVote")
  unVote(@Body() dto: CreateVoteDto){
    return this.blackSpotsService.removeVotes(dto.blackSpotId, dto.voterId);
  }


}
