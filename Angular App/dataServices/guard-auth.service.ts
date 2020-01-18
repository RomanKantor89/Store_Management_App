import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Token } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthService {

  constructor(
    private router: Router,
    private cookieService: CookieService
  ) { }

  canActivate(): boolean {
    if (!this.cookieService.check('LoginToken')) {
      this.router.navigate(['/login']);
      return false;
    } else {
      const token: Token = JSON.parse(this.cookieService.get('LoginToken'));
      if (!token.token || !token.success) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    }
  }
}
