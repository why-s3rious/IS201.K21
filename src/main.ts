import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initSwagger } from './swagger/initalize'

async function bootstrap() {
  let port = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule);
  initSwagger(app);
  await app.listen(port).then(mes=>console.log('run on localhost'));
}
bootstrap();
