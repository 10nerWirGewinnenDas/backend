import { BlackSpot } from './black_spot';
import { ApiProperty } from '@nestjs/swagger';

export class Upvote {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: () => BlackSpot })
  spot: BlackSpot;

  @ApiProperty({ type: String })
  spotId: string;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: String })
  voterId: string;
}
