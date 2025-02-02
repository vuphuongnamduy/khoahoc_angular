import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { CartComponent } from './cart/cart.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { authInterceptorProviders } from './services/interceptor.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { SwiperModule } from 'swiper/angular';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTableModule, NzTableSelectionComponent } from 'ng-zorro-antd/table';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ProductManagementComponentComponent } from './product-management-component/product-management-component.component';
import { OrderManagementComponentComponent } from './order-management-component/order-management-component.component';
import { UserManagementComponentComponent } from './user-management-component/user-management-component.component';
import { SliderComponent } from './slider/slider.component';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchManagementComponentComponent } from './search-management-component/search-management-component.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    OrderHistoryComponent,
    ProductComponent,
    CheckoutComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    AdminNavComponent,
    ProductManagementComponentComponent,
    OrderManagementComponentComponent,
    UserManagementComponentComponent,
    SliderComponent,
    SearchManagementComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    HttpClientModule,
    AuthModule,
    FormsModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzDropDownModule,
    NzIconModule,
    NzInputModule,
    NzAlertModule,
    NzInputNumberModule,
    NzTableModule,
    NzMenuModule,
    SwiperModule,
    NzSpinModule,
    NzNotificationModule,
    NzProgressModule,
    NzTableModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA

  ],
  providers: [
    authInterceptorProviders,
    AuthGuardService,
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
