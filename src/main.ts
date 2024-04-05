import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {NestExpressApplication} from "@nestjs/platform-express";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true
  });

  app.enableCors();
  app.setGlobalPrefix("api/v2")
  app.useGlobalPipes(new ValidationPipe());
  app.useBodyParser('urlencoded', {limit: '5mb'})
  app.useBodyParser('json', {limit: '10mb'})

  const config = new DocumentBuilder()
    .setTitle('BlackSpots API')
    .setDescription('The BlackSpots API documentation')
    .setVersion('2.0')
    //.addTag('/auth', "✅ Authentication")
    /*
    .addSecurity("bearer", {
      type: "http",
      scheme: "bearer",
    })
     */
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true
    }
  });

  await app.listen(3000);
}
bootstrap();
