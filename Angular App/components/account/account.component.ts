import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/classes/address';
import { UserAccount } from 'src/app/classes/user-account';
import { UserService } from 'src/app/dataServices/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Token } from 'src/app/dataServices/auth.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

    // Data Properties
    tempAddress: Address;
    userAccount: UserAccount;
    message: string;

    constructor(
        private cookieService: CookieService,
        private userService: UserService
    ) {
        this.tempAddress = new Address();
        this.message = '';
    }

    ngOnInit() {
        this.getUser();
        this.tempAddress = new Address();
    }

    // User Functions
    getUser(): void {
        this.userAccount = JSON.parse(sessionStorage.getItem('user'));
    }

    addAddress(): void {
        this.userAccount.address.push(JSON.parse(JSON.stringify(this.tempAddress)));
        this.tempAddress = new Address();
    }

    deleteAddress(index: number): void {
        this.userAccount.address.splice(index, 1);
    }

    onSubmit() {
        this.update();
    }

    update(): void {
        this.userService.updateUser(
            this.userAccount
        )
            .subscribe(
                () => {
                    this.cookieService.delete('LoginToken');
                    sessionStorage.clear();
                    location.reload();
                },
                (err) => {
                    console.error(err);
                }
            );
    }

    delete(): void {
        this.userService.deleteUser(
            this.userAccount._id
        )
            .subscribe(
                () => {
                    this.cookieService.delete('LoginToken');
                    sessionStorage.clear();
                    location.reload();
                },
                (err) => {
                    console.error(err);
                }
            );
    }
    logout() {
        this.cookieService.deleteAll();
        sessionStorage.clear();
        location.reload();
    }
}
