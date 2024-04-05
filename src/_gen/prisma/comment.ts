import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Comment {
  @ApiProperty({ type: String })
  id: string;

  @ApiPropertyOptional({ type: String })
  authorName?: string;

  @ApiProperty({ type: String })
  spotId: string;

  @ApiProperty({ type: String })
  text: string;

  @ApiProperty({ type: Date })
  createdAt: Date;
}
