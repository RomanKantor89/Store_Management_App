import { Component, OnInit } from '@angular/core';
import { UserAccount } from '../../classes/user-account';
import { ServicesService } from '../../dataServices/services.service';
import { CookieService } from 'ngx-cookie-service';
import { Service } from '../../classes/service';
import { ItemList } from '../../classes/item-list';
import { Order } from '../../classes/order';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

    Services: Service[];

    admin: boolean;
    user: UserAccount;
    isUserLoggedIn: boolean;
    isAdded: boolean;
    selectedService: number;
    ItemLists: ItemList[];
    order: Order;

    constructor(private servicesService: ServicesService, private cookieServie: CookieService) { }

    ngOnInit() {
        this.getServices();
        this.isAdded = false;
        this.isUserLoggedIn = this.cookieServie.check('LoginToken');
        this.selectedService = 0;
        this.getUser();
        if (this.user.userType === 'Admin' || this.user.userType === 'admin') {
            this.admin = true;
        }
        this.order = sessionStorage.getItem('order') == null ? new Order() : JSON.parse(sessionStorage.getItem('order'));
        if (this.order.service == null) {this.order.service = []};
    }

     // User Functions
    getUser(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

    setSelected(serviceIndex: number) : void{
        this.isAdded = false;
        this.selectedService = serviceIndex;
        const itemLength = this.Services[serviceIndex].item.length;
        this.ItemLists = [];
        for (let i = 0; i < itemLength; i++) {
            const l = new ItemList();
            l.item = this.Services[serviceIndex].item[i];
            l.quantity = 0;
            this.ItemLists.push(l);
        }

    }
    onSubmit() {
        const copy = JSON.parse(JSON.stringify(this.Services[this.selectedService]));

        delete copy.item;
        delete copy.serviceDescription;
        delete copy.image;

        copy.itemList = [];
        let index = 0;
        for (let i = 0; i < this.ItemLists.length; i++){
            if(this.ItemLists[i].quantity != 0){
                copy.itemList.push(this.ItemLists[i]);
            }
        }

        console.log(copy);

        this.order.service.push(copy);
        this.ItemLists = [];

        sessionStorage.setItem('order', JSON.stringify(this.order));

        this.isAdded = true;
    }

    // Service functions
    getServices(): void {
        this.servicesService.serviceGetAll()
        .subscribe(
            (services) => this.Services = services,
            (err) => console.error(err)
        );
    }

}
