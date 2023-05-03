import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from '../services/product.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.scss']
})
export class AddproductsComponent implements OnInit {

  title = '';
  image = '';
  description = '';
  price = '';
  quantity = '';
  short_desc = '';
  errorMessage = '';

  loading = false;
  constructor(
    private _product: ProductService,
    private _router: Router,
    private _token : TokenStorageService
  ) { }

  ngOnInit(): void {}

  onSubmit(): void {
    this.errorMessage = '';
    if (this.title && this.image && this.description && this.price && this.quantity && this.short_desc) {
      
        this.loading = true;
      
        this._product
          .addProduct({
            title: this.title,
            description: this.description,
            price: this.price,
            image: this.image,
            quantity: this.quantity,
            short_desc: this.short_desc,
            sellerid: this._token.getUser()._id
          })
          .subscribe(
            (res) => {
              console.log(res);
              this.loading = false;
              this._router.navigate(['/showmyproducts']);
            },
            (err) => {
              this.errorMessage = err.error.message;
              this.loading = false;
            }
          );
    } else {
      this.errorMessage = 'Make sure to fill everything ;)';
    }
  }

  canSubmit(): boolean {
    // console.log(this.role)
    return this.title && this.image && this.description && this.price && this.quantity && this.short_desc
      ? true
      : false;
  }
}
