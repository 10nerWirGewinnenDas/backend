import {Body, Controller, Get, Post} from '@nestjs/common';
import {BlackSpotsService} from "./blackspots.service";
import {CreateUpvoteDto} from "./dto/upvotes.dto";

@Controller('blackspots')
export class BlackSpotsController {
  constructor(
    private readonly blackSpotsService: BlackSpotsService
  ) {}

  @Get()
  findAll(){
    return this.blackSpotsService.findAll();
  }

  @Post()
  create(){
    // create blackSpot and add initial vote
  }

  @Post(":id/votes")
  vote(@Body() dto: CreateUpvoteDto){
    // ToDo: add vote to blackSpot

  }


}
