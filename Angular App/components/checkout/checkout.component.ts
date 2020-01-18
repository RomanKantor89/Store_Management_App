import { Component, OnInit } from '@angular/core';
import { UserAccount, Card } from 'src/app/classes/user-account';
import { UserService } from 'src/app/dataServices/user.service';
import { Address } from 'src/app/classes/address';
import { Activity, ActivityType } from 'src/app/classes/activity';
import { Router } from '@angular/router';
import { Order } from 'src/app/classes/order';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
    user: UserAccount;
    message: string;
    order: Order;
    orderTotal: number;
    selectedIndex: number;

    newAddress: Address;

    constructor(private userService: UserService, private router: Router) {
        this.message = "";
        this.selectedIndex = 0;
        this.newAddress = new Address();
        this.orderTotal = 0;
    }

    ngOnInit() {
        this.getUser();
        this.getOrder();
    }

    // User functions
    getUser(): void {
        this.user = JSON.parse(sessionStorage.getItem('user'));
        console.log(this.user);
    }

    getOrder(): void {
        this.order = JSON.parse(sessionStorage.getItem('order'));

        for (const service of this.order.service) {
            for (const itemlist of service.itemList) {
                this.orderTotal += itemlist.item.price * itemlist.quantity;
            }
        }

        console.log(this.order);
    }
    
    onSubmit(){
        this.submitOrderWithPrepaid();
    }

    submitOrderWithPrepaid(): void {

        if (this.orderTotal < this.user.card.currBalance) {
            this.order.orderStatus = 'processing';
            console.log(this.order);

            this.user.order.push(this.order);

            console.log(this.user);

            this.userService.updateUser(this.user)
                .subscribe(
                    () => {
                        this.userService.getUserById(this.user._id)
                            .subscribe(
                                (user) => {
                                    this.user = user;
                                    const orderId = this.user.order[this.user.order.length - 1]._id;

                                    const activity = new Activity();
                                    activity.timeStamp = (new Date()).getTime();
                                    activity.activityType = ActivityType.Payment;
                                    activity.amount = this.orderTotal;
                                    activity.orderId = orderId;

                                    this.user.card.currBalance = Math.round(
                                        (this.user.card.currBalance * 100) -
                                        (activity.amount * 100)
                                    ) / 100;

                                    this.user.card.activity.push(activity);
                                    

                                    this.userService.updateUser(this.user)
                                        .subscribe(
                                            () => {
                                                sessionStorage.removeItem('order');
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
    }
}
