import { Component, Input } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { CustomDialogService } from 'src/app/services/custom-dialog/custom-dialog.service';


@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html'
})
export class OrderCardComponent {
  @Input() order: Order;
}
