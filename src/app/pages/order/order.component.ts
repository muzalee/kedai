import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  constructor(
    public orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.orderService.getOrders();
  }

  get isLoading(): boolean {
    return this.orderService.isLoading;
  } 
}
