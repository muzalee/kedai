import { Cart } from "./cart.model";

export class Order {
  orderNo: string;
  total: string;
  carts: Cart[];

  constructor(data: any) {
    this.orderNo = data.orderNo,
    this.total = data.total ?? '0.00';
    this.carts = data.carts == null ? [] : data.carts.map((item) => new Cart(item));
  }
}