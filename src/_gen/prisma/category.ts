import { BlackSpot } from './black_spot';
import { ApiProperty } from '@nestjs/swagger';

export class Category {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  city: string;

  @ApiProperty({ isArray: true, type: () => BlackSpot })
  spots: BlackSpot[];
}
