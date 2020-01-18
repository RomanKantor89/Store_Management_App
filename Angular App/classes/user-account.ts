import { Address } from './address';
import { Order } from './order';
import { Activity } from './activity';

export class Card {
    currBalance: number;
    activity: Activity[];

    constructor() {
        this.currBalance = 0;
        this.activity = [];
    }
}

export class UserAccount {
    _id: string;
    userName: string;
    password: string;
    userType: string; // Can be 'admin' or 'customer'
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: Address[];
    order: Order[];
    card: Card;
    claims: string[];

    constructor() {
        this.address = [];
        this.order = [];
    }
}
