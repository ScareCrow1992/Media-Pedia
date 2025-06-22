import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './config/swagger.config';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.use(helmet());

  setupSwagger(app);

  app.enableCors({
    origin: 'http://localhost:3000',  // 프론트 URL
    credentials: true,
  });


  await app.listen(process.env.PORT ?? 3300);
}
bootstrap();
