import { Body, Controller, Post } from '@nestjs/common';
import { CreateCommentDto } from './dto/comments.dto';
import { BlackSpotCommentsService } from './comments.service';

@Controller('blackspots/comments')
export class BlackSpotCommentsController {
  constructor(
    private readonly commentsService: BlackSpotCommentsService
  ) {}

  @Post()
  async createComment(@Body() dto: CreateCommentDto) {
    return this.commentsService.createComment(dto);
  }

}