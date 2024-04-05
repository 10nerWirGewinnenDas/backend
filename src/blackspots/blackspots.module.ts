import { Module } from '@nestjs/common';
import { BlackspotsService } from './blackspots.service';

@Module({
  providers: [BlackspotsService]
})
export class BlackspotsModule {}
