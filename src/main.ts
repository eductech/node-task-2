import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { PORT, USE_FASTIFY } from './common/config';
import { stream, logger } from './services/logger';
import { morgan } from './services/morgan';
import { GlobalExceptionsFilter } from './exceptionFilters/global-exception-filter.exception';

async function bootstrap() {
  let app: INestApplication;

  if (USE_FASTIFY) {
    app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter()
    );
  } else {
    app = await NestFactory.create(AppModule);
  }

  app.useGlobalFilters(new GlobalExceptionsFilter());
  app.use(morgan(':method :url :status :body :query', { stream }));
  await app.listen(PORT || 4000);
}
bootstrap();

process.on('uncaughtException', (error) => {
  logger.error(`captured error: ${error.message}`);
});

process.on('unhandledRejection', (reason) => {
  logger.error(`Unhandled rejection detected: ${JSON.stringify(reason)}`);
});
