import { CartItem } from "./cart.model";

export class Order {
  orderNo: string;
  total: string;
  carts: CartItem[];

  constructor(data: any) {
    this.orderNo = data.orderNo,
    this.total = data.total ?? '0.00';
    this.carts = data.carts == null ? [] : data.carts.map((item) => new CartItem(item));
  }
}