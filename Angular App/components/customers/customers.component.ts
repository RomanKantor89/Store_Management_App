import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/dataServices/user.service';
import { UserAccount } from 'src/app/classes/user-account';
import { Router } from '@angular/router';

class Field {
  static usernameSort: boolean;
  static firstnameSort: boolean;
  static lastnameSort: boolean;
  static emailSort: boolean;
  static phoneSort: boolean;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  // Data properties
  customersList: UserAccount[];

  // UI properties
  customers: any;
  searchString: string;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  // User functions
  getUsers(): void {
    this.userService.getUsers()
    .subscribe(
      (users) => {
        this.customersList = users.filter(
          user => user.userType === 'customer'
        );
        this.customers = this.customersList;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  setSelectedUser(user: UserAccount): void {
    sessionStorage.setItem('selectedUserOrders', JSON.stringify(user));
    this.router.navigate(['/customers/order']);
  }

  // UI functions
  search(searchString: string): void {
    this.customers = this.customersList;
    if (searchString) {
      const regex = new RegExp(searchString.toLowerCase());
      this.customers = this.customers.filter(
        (customer) => {
          return JSON.stringify(customer).toLowerCase().match(regex);
        }
      );
    }
    return this.customers;
  }

  sortUsername(): void {
    this.customers.sort(
      (a, b) => {
        if (a.userName.toLowerCase() > b.userName.toLowerCase()) {
          return -1;
        } else if (a.userName.toLowerCase() < b.userName.toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      }
    );
    if (Field.usernameSort) {
      this.customers.reverse();
    }
    Field.usernameSort = !Field.usernameSort;
  }

  sortFirstname(): void {
    this.customers.sort(
      (a, b) => {
        if (!a.firstName) { a.firstName = ''; }
        if (!b.firstName) { b.firstName = ''; }

        if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
          return -1;
        } else if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      }
    );
    if (Field.firstnameSort) {
      this.customers.reverse();
    }
    Field.firstnameSort = !Field.firstnameSort;
  }
  sortLastname(): void {
    this.customers.sort(
      (a, b) => {
        if (!a.lastName) { a.lastName = ''; }
        if (!b.lastName) { b.lastName = ''; }

        if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) {
          return -1;
        } else if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      }
    );
    if (Field.lastnameSort) {
      this.customers.reverse();
    }
    Field.lastnameSort = !Field.lastnameSort;
  }
  sortEmail(): void {
    this.customers.sort(
      (a, b) => {
        if (!a.email) { a.email = ''; }
        if (!b.email) { b.email = ''; }

        if (a.email.toLowerCase() > b.email.toLowerCase()) {
          return -1;
        } else if (a.email.toLowerCase() < b.email.toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      }
    );
    if (Field.emailSort) {
      this.customers.reverse();
    }
    Field.emailSort = !Field.emailSort;
  }
  sortPhone(): void {
    this.customers.sort(
      (a, b) => {
        if (!a.phone) { a.phone = ''; }
        if (!b.phone) { b.phone = ''; }

        if (a.phone.toLowerCase() > b.phone.toLowerCase()) {
          return -1;
        } else if (a.phone.toLowerCase() < b.phone.toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      }
    );
    if (Field.phoneSort) {
      this.customers.reverse();
    }
    Field.phoneSort = !Field.phoneSort;
  }
}
