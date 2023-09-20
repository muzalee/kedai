import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Product } from 'src/app/models/product.model';
import { ImageItem } from 'ng-gallery';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: Product[] = [];
  public carouselItems: ImageItem[];

  isLoading: boolean = false;

  constructor(
    private httpService: HttpService,
  ) {}

  getProduct() {
    this.isLoading = true;
    this.httpService.get('product').subscribe(
      (r) => {
        if (Array.isArray(r)) {
          this.products = r.map((item) => new Product(item));
        }
        this.carouselItems = this.products.map((product) => {
          return new ImageItem({
            src: product.image,
            thumb: product.image,
          });
        });
        this.isLoading = false;
      },
      (_) => {
        this.isLoading = false;
      }
    );
  }
}