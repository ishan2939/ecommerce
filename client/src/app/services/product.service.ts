import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products, Product } from '../shared/models/product.model';
import { environment } from '../../environments/environment';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient, private _api: ApiService) {}

  getAllProducts(limitOfResults = 9, page): Observable<Products[]> {
    return this.http.get<Products[]>(this.url + 'products', {
      params: {
        limit: limitOfResults.toString(),
        page: page,
      },
    });
  }

  getSingleProduct(id: String): Observable<any> {
    console.log(this._api.getTypeRequest('products/' + id));
    return this._api.getTypeRequest('products/' + id);
  }

  getMyProducts(id: any, limitOfResults = 9, page): Observable<Products[]> {
    // console.log("===========hello");
    return this.http.get<Products[]>(this.url + 'showmyproducts', {
      params: {
        limit: limitOfResults.toString(),
        page: page,
        sellerid: id,
      },
    });
  }

  addProduct(product: any): Observable<any> {
    console.log("Your product", product);
    return this._api.postTypeRequest('addproduct', {
      title: product.title,
      description: product.description,
      price: product.price,
      image: product.image,
      quantity: product.quantity,
      short_desc: product.short_desc,
      seller_id: product.sellerid
    });
  }

  deleteProduct(id: any): Observable<any> {
    console.log("Your product", id);
    return this._api.postTypeRequest('deleteproduct', {
      id: id
    });
  }
}
