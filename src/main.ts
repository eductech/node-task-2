import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './common/config';
import { stream } from './services/logger';
import { morgan } from './services/morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan(':method :url :status :body :query', { stream }));
  await app.listen(PORT || 4000);
}
bootstrap();
