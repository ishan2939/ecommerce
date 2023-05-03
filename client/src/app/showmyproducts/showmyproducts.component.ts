import {
  ViewEncapsulation,
  HostListener,
} from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { Products, Product } from '../shared/models/product.model';
import { ProductService } from '../services/product.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-showmyproducts',
  templateUrl: './showmyproducts.component.html',
  styleUrls: ['./showmyproducts.component.scss']
})
export class ShowmyproductsComponent implements OnInit {
  products: Product[] = [];
  loading = false;
  productPageCounter = 1;
  additionalLoading = false;
  sellerId: any;
  constructor(
    private productService: ProductService,
    private _token: TokenStorageService,
  ) { 
    this.sellerId = this._token.getUser()._id;
  }

  public screenWidth: any;
  public screenHeight: any;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.loading = true;
    setTimeout(() => {
      this.productService.getMyProducts(this.sellerId, 9, this.productPageCounter).subscribe(
        (res: any) => {
          console.log(res);
          this.products = res;
          this.loading = false;
        },
        (err) => {
          console.log(err);
          this.loading = false;
        }
      );
    }, 500);
    
  }

  
  showMoreProducts(): void {
    this.additionalLoading = true;
    this.productPageCounter = this.productPageCounter + 1;
    setTimeout(() => {
      this.productService.getMyProducts(this.sellerId, 9, this.productPageCounter).subscribe(
        (res: any) => {
          console.log(res);
          this.products = [...this.products, ...res];
          this.additionalLoading = false;
        },
        (err) => {
          console.log(err);
          this.additionalLoading = false;
        }
      );
    }, 500);
  }

}
