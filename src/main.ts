import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.PORT)
  if (typeof process.env.PORT === "undefined")
  {
    await app.listen(3000);
  }
  else
  {
    await app.listen(process.env.PORT);
  }

}
bootstrap();
