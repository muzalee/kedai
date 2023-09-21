import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Checkout } from 'src/app/models/checkout.model';
import { HttpService } from '../http/http.service';
import { CustomDialogService } from '../custom-dialog/custom-dialog.service';
import { Order } from 'src/app/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {  
  public isLoading: boolean = false;
  public orders: Order[] = [];

  constructor(
    private httpService: HttpService,
    private customDialogService: CustomDialogService
  ) {}

  async getOrders(): Promise<void> {
    this.isLoading = true;
    this.httpService.get('order').subscribe(
      (r) => {
        if (Array.isArray(r)) {
          this.orders = r.map((item) => new Order(item));
        }
        this.isLoading = false;
      },
      (e) => {
        this.isLoading = false;
        this.customDialogService.openErrorDialog(e.error.message);
      }
    );
  }
}
