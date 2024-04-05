import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlackspotsModule } from './blackspots/blackspots.module';
import {PrismaModule} from "./prisma/prisma.module";

@Module({
  imports: [
    BlackspotsModule,
    PrismaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
