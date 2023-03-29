import { Get, Controller, Res, Render } from '@nestjs/common';


@Controller()
export class AppController {
  @Get()
  @Render('index') // <= Название вашего представления
  getIndexPage() {
    return { layout: 'main' }; // Модель представления
  }


  @Get('/price.hbs')
  @Render('price')
  getHello() {
    return { layout : 'main'};
  }

  @Get('/index.hbs')
  @Render('index')
  getIndex() {
    return { layout : 'main'};
  }

  @Get('/comments.hbs')
  @Render('comments')
  getComments() {
    return { layout : 'main'};
  }

}