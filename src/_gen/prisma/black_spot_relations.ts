import { Category } from './category';
import { Vote } from './vote';
import { Comment } from './comment';
import { ApiProperty } from '@nestjs/swagger';

export class BlackSpotRelations {
  @ApiProperty({ type: () => Category })
  category: Category;

  @ApiProperty({ isArray: true, type: () => Vote })
  votes: Vote[];

  @ApiProperty({ isArray: true, type: () => Comment })
  comments: Comment[];
}
