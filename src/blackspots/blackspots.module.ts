import { Module } from '@nestjs/common';
import { BlackSpotsService } from './blackspots.service';
import { BlackSpotsController } from './blackspots.controller';
import { BlackSpotsCommentsModule } from './comments/comments.module';

@Module({
  imports: [BlackSpotsCommentsModule,],
  providers: [BlackSpotsService],
  controllers: [BlackSpotsController]
})
export class BlackspotsModule {}
