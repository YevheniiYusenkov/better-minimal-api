import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';

import { AppConfigService } from '@app/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get<AppConfigService>(AppConfigService);

  app.setGlobalPrefix(config.prefix);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidUnknownValues: true,
    }),
  );

  await app.listen(config.port);

  Logger.log(`App start listening at port: ${config.port}`);
}

bootstrap();
