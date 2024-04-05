import {Body, Controller, Get, Post} from '@nestjs/common';
import {BlackSpotsService} from "./blackspots.service";
import {CreateUpvoteDto} from "./upvotes.dto";
import {CreateBlackSpotDto} from "./blackspots.dto";
import {PrismaService} from "../prisma/prisma.service";

@Controller('blackspots')
export class BlackSpotsController {
  constructor(
    private readonly blackSpotsService: BlackSpotsService,
    private readonly prisma: PrismaService
  ) {}

  @Get()
  findAll(){
    return this.blackSpotsService.findAll();
  }

  @Post()
  create(@Body() dto: CreateBlackSpotDto){
    // create blackSpot and add initial vote
    return this.prisma.blackSpot.create({
      data: {
        latitude: dto.,
        longitude: "42",
        description: dto.description,
        votes: {
          create: {
            voterId: dto.voterId
          }
        },
        name: dto.name
      }
    })

  }

  @Post(":id/votes")
  vote(@Body() dto: CreateUpvoteDto){
    // ToDo: add vote to blackSpot
  }


}
