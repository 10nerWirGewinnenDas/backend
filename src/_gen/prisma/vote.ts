import { VoteType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class Vote {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ enum: VoteType, enumName: 'VoteType' })
  type: VoteType;

  @ApiProperty({ type: String })
  spotId: string;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: String })
  voterId: string;
}
