import { CartItem } from './cart-item.model';
import { Customer } from './customer.model';

export class Order {
  constructor(
    public customer: Customer = new Customer(),
    public items: CartItem[] = [],
    public total: number = 0,
    public status: string = '',
    public number: string = '',
    public date: string = new Date().toISOString().split('T')[0],
    public shippingMethod: string = '',
    public paymentMethod: string = ''
  ) {}
}
