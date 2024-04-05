import { BlackSpot } from './black_spot';
import { ApiProperty } from '@nestjs/swagger';

export class VoteRelations {
  @ApiProperty({ type: () => BlackSpot })
  spot: BlackSpot;
}
