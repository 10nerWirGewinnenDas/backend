import { BlackSpot } from './black_spot';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Comment {
  @ApiProperty({ type: String })
  id: string;

  @ApiPropertyOptional({ type: String })
  authorName?: string;

  @ApiProperty({ type: () => BlackSpot })
  spot: BlackSpot;

  @ApiProperty({ type: String })
  spotId: string;

  @ApiProperty({ type: Date })
  createdAt: Date;
}
