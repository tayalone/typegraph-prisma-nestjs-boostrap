import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration from './config/configuration';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
  const { port } = configuration();
  const app = await NestFactory.create(AppModule, {
    // logger: false,
  });
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  await app.listen(port);
}
bootstrap();
