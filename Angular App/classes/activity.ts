export enum LoadType {
    Debit = 'Debit',
    Credit = 'Credit',
    Paypal = 'Paypal'
}

export enum ActivityType {
    Payment = 'payment',
    Load = 'load'
}

export class Activity {
    _id: string;
    activityType: ActivityType; // Can be 'payment' or 'load'
    amount: number;
    orderId: string; // If activityType is payment
    loadType: LoadType; // Can be 'Debit' 'Credit' 'Paypal'
    timeStamp: number;

    constructor() {
        this.loadType = LoadType.Debit;
    }
}
