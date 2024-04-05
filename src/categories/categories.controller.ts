import {Controller, Get, Query} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {ApiOkResponse} from "@nestjs/swagger";
import {GetCategoryDto} from "./dto/categories.dto";

@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  @Get()
  @ApiOkResponse({
    type: [GetCategoryDto]
  })
  findAll(@Query("topLeftLat") topLeftLat?: number, @Query("topLeftLng") topLeftLng?: number, @Query("bottomRightLat") bottomRightLat?: number, @Query("bottomRightLng") bottomRightLng?: number){
    if(!topLeftLat){
      return this.prisma.category.findMany();
    }else{
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
    }
  }
}
