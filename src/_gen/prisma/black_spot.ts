import { Category } from './category';
import { Vote } from './vote';
import { Comment } from './comment';
import { ApiProperty } from '@nestjs/swagger';

export class BlackSpot {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  description: string;

  @ApiProperty({ type: () => Category })
  category: Category;

  @ApiProperty({ type: String })
  categoryId: string;

  @ApiProperty({ type: Number })
  latitude: number;

  @ApiProperty({ type: Number })
  longitude: number;

  @ApiProperty({ isArray: true, type: () => Vote })
  votes: Vote[];

  @ApiProperty({ isArray: true, type: () => Comment })
  comments: Comment[];

  @ApiProperty({ type: Boolean })
  finished: boolean;

  @ApiProperty({ type: Boolean })
  archived: boolean;
}
