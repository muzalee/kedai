import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Checkout } from 'src/app/models/checkout.model';
import { HttpService } from '../http/http.service';
import { CustomDialogService } from '../custom-dialog/custom-dialog.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {  
  public isLoading: boolean = false;
  constructor(
    private httpService: HttpService,
    private customDialogService: CustomDialogService
  ) {}

  async getOrders(): Promise<void> {
    this.isLoading = true;
    this.httpService.get('order').subscribe(
      (r) => {
        if (r['data'] != null) {
          console.log(r);
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
