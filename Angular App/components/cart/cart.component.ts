import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/classes/order';
import { UserAccount } from 'src/app/classes/user-account';
import { UserService } from 'src/app/dataServices/user.service';
//import { Activity, ActivityType } from 'src/app/classes/activity';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    isEmpty: boolean;
    order: Order;
    userAccount: UserAccount;
    orderTotal: number;

    constructor(
        private userService: UserService,
        private router: Router
        ) {
        this.isEmpty = true;
        this.orderTotal = 0;
     }

    ngOnInit() {
        this.order = JSON.parse(sessionStorage.getItem('order'));
        this.userAccount = JSON.parse(sessionStorage.getItem('user'));
        console.log(this.order); // debug
        if (this.order != null) {
            this.isEmpty = false;

            for (const service of this.order.service) {
                for (const itemlist of service.itemList) {
                    this.orderTotal += itemlist.item.price * itemlist.quantity;
                }
            }
        }
    }

    submitOrder() {
        this.router.navigate(['/checkout']);
        /*
        if (this.orderTotal < this.userAccount.card.currBalance) {
            this.order.orderStatus = 'processing';
            console.log(this.order);

            this.userAccount.order.push(this.order);

            this.userService.updateUser(this.userAccount)
            .subscribe(
                () => {
                    this.userService.getUserById(this.userAccount._id)
                    .subscribe(
                        (user) => {
                            this.userAccount = user;
                            const orderId = this.userAccount.order[this.userAccount.order.length - 1]._id;

                            const activity = new Activity();
                            activity.timeStamp = (new Date()).getTime();
                            activity.activityType = ActivityType.Payment;
                            activity.amount = this.orderTotal;
                            activity.orderId = orderId;

                            this.userAccount.card.currBalance = Math.round(
                                (this.userAccount.card.currBalance * 100) -
                                (activity.amount * 100)
                              ) / 100;

                            this.userAccount.card.activity.push(activity);
                            sessionStorage.removeItem('order');

                            this.userService.updateUser(this.userAccount)
                            .subscribe(
                                () => {
                                    this.router.navigate(['/prepaid-card']);
                                },
                                (err) => console.error(err)
                            );
                        },
                        (err) => console.error(err)
                    );
                },
                (err) => console.error(err)
            );
        } else {
            window.alert('Pre paid balance lower than Order total');
        }
        */
    }
}
