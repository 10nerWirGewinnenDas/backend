import { ApiProperty } from '@nestjs/swagger';

export class BlackSpot {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  description: string;

  @ApiProperty({ type: String })
  categoryId: string;

  @ApiProperty({ type: Number })
  latitude: number;

  @ApiProperty({ type: Number })
  longitude: number;

  @ApiProperty({ type: Boolean })
  finished: boolean;

  @ApiProperty({ type: Boolean })
  archived: boolean;
}
