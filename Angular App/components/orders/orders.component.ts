import { Component, OnInit } from '@angular/core';
import { UserAccount } from '../../classes/user-account';
import { UserService } from '../../dataServices/user.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    user: UserAccount;
    constructor(private m: UserService) { }

    // retrieving the user session
    ngOnInit() {
        this.user = JSON.parse(sessionStorage.getItem('selectedUserOrders'));
    }

    // Update user
    edit(user) {
        sessionStorage.setItem('selectedUserOrders', JSON.stringify(user));
        this.m.updateUser(user)
            .subscribe(
                () => console.log(user),
                (err) => console.error(err)
            );
    }
    // Delete order
    delete(user, orderId) {
        console.log(this.user);
        
        for (let i = 0; i < user.order.length; i++) {
            if (user.order[i]._id === orderId) {
                user.order.splice(i, 1);
            }
        }
        sessionStorage.setItem('selectedUserOrders', JSON.stringify(user));
        this.m.updateUser(user)
            .subscribe(
                () => console.log(user),
                (err) => console.error(err)
            );

    }
}

