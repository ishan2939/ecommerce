import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/components/login/login.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { ShowmyproductsComponent } from './showmyproducts/showmyproducts.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { MyproductdetailsComponent } from './myproductdetails/myproductdetails.component';
import { ProductordersComponent } from './productorders/productorders.component';
import { ShowchartComponent } from './showchart/showchart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'product/:id', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'order-history',
    component: OrderHistoryComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'showmyproducts',
    component: ShowmyproductsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'addproduct',
    component: AddproductsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'productdetails/:id',
    component: MyproductdetailsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'getmyproductorders',
    component: ProductordersComponent,
    canActivate: [AuthGuardService],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
