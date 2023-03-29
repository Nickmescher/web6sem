import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import * as hbs from 'hbs';
import {TimingInterceptor} from "./app.service";


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
      AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  hbs.registerPartials(join(__dirname, '..', '/views/partials'));
  app.useGlobalInterceptors(new TimingInterceptor());

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

