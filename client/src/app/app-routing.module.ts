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
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { ProductManagementComponentComponent } from './product-management-component/product-management-component.component';
import { OrderManagementComponentComponent } from './order-management-component/order-management-component.component';
import { UserManagementComponentComponent } from './user-management-component/user-management-component.component';
import { SearchManagementComponentComponent } from './search-management-component/search-management-component.component';

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
    path: 'admin',
    component: AdminNavComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'product-management', component: ProductManagementComponentComponent, canActivate: [AuthGuardService],
  },
  { path: 'order-management', component: OrderManagementComponentComponent, canActivate: [AuthGuardService] },
  { path: 'user-management', component: UserManagementComponentComponent, canActivate: [AuthGuardService] },
  { path: 'search-management', component: SearchManagementComponentComponent, canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/product-management', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
