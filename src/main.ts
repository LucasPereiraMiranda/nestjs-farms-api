import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  app.use(helmet());
  app.enableCors();
  console.log(configService.get('SERVER_PORT') || 3000);
  await app.listen(configService.get('SERVER_PORT') || 3000);
}
bootstrap();
