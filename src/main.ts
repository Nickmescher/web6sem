import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
      AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));

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
