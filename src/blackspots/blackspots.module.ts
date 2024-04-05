import { Module } from '@nestjs/common';
import { BlackSpotsService } from './blackspots.service';
import { BlackSpotsController } from './blackspots.controller';

@Module({
  providers: [BlackSpotsService],
  controllers: [BlackSpotsController]
})
export class BlackspotsModule {}
