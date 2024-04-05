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
  findAll(){
    return this.prisma.category.findMany();
  }
}
