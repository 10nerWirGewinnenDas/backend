import {ApiProperty} from "@nestjs/swagger";
import { VoteType } from '@prisma/client';

export class CreateVoteDto {
  @ApiProperty({required: false})
  voterId?: string;

  @ApiProperty({type: String, enum: VoteType})
  type: VoteType;

  @ApiProperty()
  blackSpotId: string;
}