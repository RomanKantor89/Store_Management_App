import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../dataServices/services.service';
import { UserAccount } from 'src/app/classes/user-account';
import { Address } from 'src/app/classes/address';
import { AuthService } from 'src/app/dataServices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userAccount: UserAccount;
  tempAddress: Address;
  message: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.userAccount = new UserAccount();
    this.tempAddress = new Address();
    this.message = '';
  }

  ngOnInit() {
  }

  // User Functions
  addAddress(): void {
    this.userAccount.address.push(JSON.parse(JSON.stringify(this.tempAddress)));
    this.tempAddress = new Address();
  }

  deleteAddress(index: number): void {
    this.userAccount.address.splice(index, 1);
  }

  onSubmit() {
    this.register();
    this.router.navigate(['/login']);
  }

  register(): void {
    this.authService.register(this.userAccount)
    .subscribe(
      () => console.log(this.userAccount),
      (err) => console.log(err)
    );
  }
}
