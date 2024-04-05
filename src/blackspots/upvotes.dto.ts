import {ApiProperty} from "@nestjs/swagger";

export class CreateUpvoteDto {
  @ApiProperty({required: false})
  voterId?: string;
}