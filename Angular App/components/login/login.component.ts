import { Component, OnInit } from '@angular/core';
import { Credentials, AuthService, Token } from 'src/app/dataServices/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/dataServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // Data Properties
  token: Token;

  // UI Properties
  credentials: Credentials;
  loginError: string;

  // Initialization

  constructor(
    private authService: AuthService,
    private cookieService: CookieService, 
    private userService: UserService
  ) {
    this.credentials = new Credentials();
    this.credentials.username = '';
    this.credentials.password = '';

    this.loginError = '';
  }

  ngOnInit() {
  }

  // UI Functions
  onSubmit(): void {
    console.log(this.credentials);
    this.login();
  }

  // Auth Functions
  login(): void {
    this.authService.login(
      this.credentials
    ).subscribe(
      (token) => {
        if (token.success) {
          this.token = token;
          this.cookieService.set('LoginToken', JSON.stringify(this.token));
          this.userService.getUserById(this.token.userId)
          .subscribe(
            (user) => {
              sessionStorage.setItem('user', JSON.stringify(user));
              window.location.href = '/';
            },
            (err) => {
              console.error(err);
            }
          );
        } else {
          this.loginError = 'Login Unsuccessful';
        }
      },
      (err) => console.error(err)
    );
  }
}
