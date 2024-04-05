import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCommentDto } from './dto/comments.dto';

@Injectable()
export class BlackSpotCommentsService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async createComment(dto: CreateCommentDto) {
    return this.prisma.comment.create({
      data: {
        spot: {
          connect: {
            id: dto.spotId
          }
        },
        authorName: dto.authorName,
        createdAt: new Date(),
        text: dto.text
      }
    })
  }
}