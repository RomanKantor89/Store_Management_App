import { Item } from './item';
import { ItemList } from './item-list';

export class Service {
    name: string;
    serviceDescription?: string;
    image?: string;
    _id: string;
    item?: Item[];
    itemList?: ItemList[];
}
