import { Service } from './service';

export class Order {
    _id: string;
    orderStatus: string;
    service: Service[];
}
