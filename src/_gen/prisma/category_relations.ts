import { BlackSpot } from './black_spot';
import { ApiProperty } from '@nestjs/swagger';

export class CategoryRelations {
  @ApiProperty({ isArray: true, type: () => BlackSpot })
  spots: BlackSpot[];
}
