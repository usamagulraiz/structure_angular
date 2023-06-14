import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(public router: Router, public toastr: ToastrService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err) => {
        console.log(err);
        if (err.status === 401) {
          localStorage.clear();
          this.toastr.error('Session Expired', 'Error');

          this.router.navigate(['/auth/login']);
        } else {
          this.toastr.error(err.error.errors[0].msg, 'Error');
        }

        // this.toastr.error(message, 'Error');

        return throwError(err);
      })
    );
  }
}
