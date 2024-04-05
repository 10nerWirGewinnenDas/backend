import { Upvote } from './upvote';
import { ApiProperty } from '@nestjs/swagger';

export class BlackSpot {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  description: string;

  @ApiProperty({ type: String })
  latitude: string;

  @ApiProperty({ type: String })
  longitude: string;

  @ApiProperty({ isArray: true, type: () => Upvote })
  votes: Upvote[];
}
