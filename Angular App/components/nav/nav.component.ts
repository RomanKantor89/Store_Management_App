import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../dataServices/user.service';
import { UserAccount } from '../../classes/user-account';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    loggedIn: boolean;
    admin: boolean;
    user: UserAccount;

    constructor(
        private cookieServie: CookieService, private userService: UserService
    ) { }

    ngOnInit() {
        this.loggedIn = this.cookieServie.check('LoginToken');
        //this.loggedIn = true;
        this.getUser();
        if(this.user){
        if (this.user.userType === 'Admin' || this.user.userType === 'admin') {
            this.admin = true;
        }
    }
    }

  // User Functions
  getUser(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }
}
