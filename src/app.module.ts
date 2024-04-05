import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlackspotsModule } from './blackspots/blackspots.module';
import {PrismaModule} from "./prisma/prisma.module";
import { ReportersModule } from './reporters/reporters.module';

@Module({
  imports: [
    BlackspotsModule,
    PrismaModule,
    ReportersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
