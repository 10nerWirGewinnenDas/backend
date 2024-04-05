import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlackspotsModule } from './blackspots/blackspots.module';
import {PrismaModule} from "./prisma/prisma.module";
import { CategoriesModule } from './categories/categories.module';
import {JwtModule} from "@nestjs/jwt";

@Module({
  imports: [
    BlackspotsModule,
    PrismaModule,
    CategoriesModule,
    JwtModule.registerAsync({
      global: true,
      useFactory: async () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '1h' },
      }),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
