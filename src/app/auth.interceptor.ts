import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('jwt');
    let headers = request.headers;
    if (token) {
      headers = headers.set('Authorization', token);
    }
    let tokenizedReq = request.clone({ headers });
    return next.handle(tokenizedReq);
  }
}
