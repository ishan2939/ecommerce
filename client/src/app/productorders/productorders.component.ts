import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-productorders',
  templateUrl: './productorders.component.html',
  styleUrls: ['./productorders.component.scss']
})
export class ProductordersComponent implements OnInit {
  user: any;
  orders: any[] = [];
  error = '';

  constructor(private _api: ApiService,
    private _auth: AuthService) {
      this.user = this._auth.getUser();
     }
    

  ngOnInit(): void {
    this._api.postTypeRequest('getmyorders', {
      seller_id: this.user._id
    }).subscribe((res:any)=>{
      this.orders = res;
    }, 
    (err) => {
      this.error = err.error.message;
    });
  }

}
