import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent {
  constructor(
    public productService: ProductService
    ) {}

  get isLoading(): boolean {
    return this.productService.isLoading;
  } 
}
