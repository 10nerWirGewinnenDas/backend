import {
  BadRequestException,
  Body,
  Controller,
  ForbiddenException,
  Get, Param,
  Post,
  Query,
  Req,
  Response, StreamableFile,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common';
import {BlackSpotsService} from "./blackspots.service";
import {PrismaService} from "../prisma/prisma.service";
import {BlackSpotCreatedDto, CreateBlackSpotDto, GetBlackSpotDto} from "./dto/blackspots.dto";
import {ApiBody, ApiConsumes, ApiOkResponse, ApiQuery, ApiResponse} from "@nestjs/swagger";
import {VoteType} from "@prisma/client";
import {CreateVoteDto, GetVoteDto} from './dto/upvotes.dto';
import {Request, Response as Res} from "express";
import {JwtService} from "@nestjs/jwt";
import {FileInterceptor} from "@nestjs/platform-express";
import {FileUploadDto} from "../dto/file-upload.dto";
import * as fs from "fs";

@Controller('blackspots')
export class BlackSpotsController {
  constructor(
    private readonly blackSpotsService: BlackSpotsService,
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  @Get()
  @ApiOkResponse({
    type: [GetBlackSpotDto]
  })
  @ApiQuery({
    name: "voterId",
    required: false
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
  findAll(@Query("topLeftLat") topLeftLat?: number, @Query("topLeftLng") topLeftLng?: number, @Query("bottomRightLat") bottomRightLat?: number, @Query("bottomRightLng") bottomRightLng?: number, @Query("voterId") voterId?: string){
    if(topLeftLat){
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
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
          comments: true,
          votes: voterId ? {
            where: {
              voterId
            }
          } : undefined
        }
      });
    }else{
      return this.blackSpotsService.findAll(voterId);
    }
  }

  @Post()
  @ApiOkResponse({
    type: BlackSpotCreatedDto
  })
  async create(@Body() dto: CreateBlackSpotDto, @Response() res: Res){
    return this.blackSpotsService.create(dto, res);
  }

  @Post(":id/image")
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'File',
    type: FileUploadDto,
  })
  async uploadImage(@Param("id") blackSpotId: string, @Req() request: Request, @UploadedFile() file: Express.Multer.File){
    if(request.headers["x-upload-token"]){
      try{
        const token = this.jwtService.verify(request.headers["x-upload-token"] as string);
        if(token.id !== blackSpotId || token.type !== "imageUpload"){
          throw new BadRequestException("Token falsch du dummer Hurensohn")
        }

        if(file.originalname.endsWith('.png') || file.originalname.endsWith('.jpg')){
          await fs.promises.writeFile(`./uploads/${token.id}.${file.originalname.split('.')[file.originalname.split('.').length-1]}`, file.buffer);
        }
      }catch (e) {
        console.log(e)
        throw new ForbiddenException("Invalid token");
      }
    }else{
      throw new ForbiddenException("No token du bastard")
    }
  }

  @Get(":id/image")
  @ApiResponse({
    status: 200,
    schema: {
      type: "file"
    }
  })
  async getImage(@Param("id") blackSpotId: string){
    let imageBuffer: Buffer;
    try{
      imageBuffer = await fs.promises.readFile(`./uploads/${blackSpotId}.png`);
    }catch (e) {
      try{
        imageBuffer = await fs.promises.readFile(`./uploads/${blackSpotId}.jpg`);
      }catch (e) {
        throw new BadRequestException("No image found");
      }
    }
    return new StreamableFile(imageBuffer);
  }

  @Post(":id/vote")
  @ApiOkResponse({
    type: GetVoteDto
  })
  vote(@Body() dto: CreateVoteDto){
    return this.blackSpotsService.vote(dto.blackSpotId, dto.type, dto.voterId);
  }

  @Post(":id/unVote")
  unVote(@Body() dto: CreateVoteDto){
    return this.blackSpotsService.removeVotes(dto.blackSpotId, dto.voterId);
  }


}
