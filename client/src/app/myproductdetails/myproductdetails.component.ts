import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { map } from 'rxjs/operators';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper/core';
import { CartService } from '../services/cart.service';

SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
]);

@Component({
  selector: 'app-myproductdetails',
  templateUrl: './myproductdetails.component.html',
  styleUrls: ['./myproductdetails.component.scss']
})
export class MyproductdetailsComponent implements OnInit {
  id: number;
  product: any;
  quantity: number;
  showcaseImages: any[] = [];
  loading = false;

  constructor(
    private _route: ActivatedRoute,
    private _product: ProductService,
    private _router: Router,
    private _cart: CartService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this._route.paramMap
      .pipe(
        map((param: any) => {
          return param.params.id;
        })
      )
      .subscribe((productId) => {
        // returns string so convert it to number
        this.id = parseInt(productId);
        // console.log(this._product["products"]);
        this._product.getSingleProduct(productId).subscribe((product) => {
          this.product = product;
          // if (product.quantity === 0) this.quantity = 0;
          // else this.quantity = 1;

          // if (product.images) {
          //   this.showcaseImages = product.images.split(';');
          // }
          this.loading = false;
        });
      });
  }

  deleteProduct(id: any): void {
    this._product.deleteProduct(id).subscribe((res) => {
      this._router.navigate(['/showmyproducts']);
    });
  }

}
