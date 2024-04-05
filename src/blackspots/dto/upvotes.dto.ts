import {ApiProperty} from "@nestjs/swagger";
import { VoteType } from '@prisma/client';
import {PrismaModel} from "../../_gen/prisma";

export class CreateVoteDto {
  @ApiProperty({required: false})
  voterId?: string;

  @ApiProperty({type: String, enum: VoteType})
  type: VoteType;

  @ApiProperty()
  blackSpotId: string;
}

export class GetVoteDto extends PrismaModel.Vote {}