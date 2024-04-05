import { ApiProperty } from '@nestjs/swagger';

export class Category {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  city: string;
}
