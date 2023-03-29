import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getIndex(): string {
    return 'Hello w';
  }

  getComments(): string {
    return 'Hello ww';
  }

}

@Injectable()
export class TimingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    console.log(now);
    return next
        .handle()
        .pipe(map((data) => ({loadTime: Date.now() - now, ...data})));
  }
}
