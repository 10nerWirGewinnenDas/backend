import { ApiProperty, OmitType } from '@nestjs/swagger';
import { PrismaModel } from '../../../_gen/prisma';

export class CreateCommentDto extends OmitType(PrismaModel.Comment, ["id", "createdAt"]){
}