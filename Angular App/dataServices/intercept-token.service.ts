import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Token } from './auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptTokenService implements HttpInterceptor{

  token: Token;

  constructor(
    private cookieService: CookieService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (this.cookieService.check('LoginToken')) {
      this.token = JSON.parse(this.cookieService.get('LoginToken'));
      request = request.clone({
        setHeaders: {
          Authorization: `JWT ${this.token.token}`
        }
      });
    }
    return next.handle(request);
  }
}
