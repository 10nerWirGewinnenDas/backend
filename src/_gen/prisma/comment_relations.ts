import { BlackSpot } from './black_spot';
import { ApiProperty } from '@nestjs/swagger';

export class CommentRelations {
  @ApiProperty({ type: () => BlackSpot })
  spot: BlackSpot;
}
