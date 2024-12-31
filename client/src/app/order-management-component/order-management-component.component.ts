import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-order-management-component',
  templateUrl: './order-management-component.component.html',
  styleUrls: ['./order-management-component.component.scss']
})
export class OrderManagementComponentComponent implements OnInit {
  
  user: any;
  orders: any[] = [];
  error = '';
  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _product: ProductService
  ) {
    this.user = this._auth.getUser();
  }

  ngOnInit(): void {
    this._api.getTypeRequest(`orders/orderAll`).subscribe(
      (res: any) => {
        console.log(res);
        res.data.forEach((item) => {
          this._product
            .getSingleProduct(item.product_id)
            .subscribe((product) => {
              this.orders.push({ ...product, ...item });
              
    console.log(this.orders);
            });
        });
        // let uniqueProductsArray = Array.from(
        //   new Set(res.data.map((p) => p.product_id))
        // );
      },
      (err) => {
        this.error = err.error.message;
      }
    );


  }
}
