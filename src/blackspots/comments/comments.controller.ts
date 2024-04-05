import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCommentDto } from './dto/comments.dto';

@Controller('blackspots/comments')
export class BlackSpotCommentsController {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  @Post()
  async createComment(@Body() dto: CreateCommentDto) {
    return this.prisma.comment.create({
      data: {
        spot: {
          connect: {
            id: dto.spotId
          }
        },
        authorName: dto.authorName,
        createdAt: new Date(),
      }
    })
  }

}