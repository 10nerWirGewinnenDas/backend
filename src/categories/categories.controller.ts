import {Controller, Get} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  @Get()
  findAll(){
    return this.prisma.category.findMany();
  }
}
