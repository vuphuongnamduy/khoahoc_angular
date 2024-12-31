import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-user-management-component',
  templateUrl: './user-management-component.component.html',
  styleUrls: ['./user-management-component.component.scss']
})
export class UserManagementComponentComponent implements OnInit {
  totalRevenue: number = 0;
  totalOrders: number = 0;
  avgOrderValue: number = 0;
  orders: any[] = [];
  error = '';

  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _product: ProductService
  ) {}

  ngOnInit(): void {
    const user = this._auth.getUser();

    // Fetch order history
    this._api.getTypeRequest(`orders/?userId=${user.id}`).subscribe(
      (res: any) => {
        if (res && res.data) {
          res.data.forEach((item: any) => {
            this._product.getSingleProduct(item.product_id).subscribe(
              (product: any) => {
                const order = { ...product, ...item };
                this.orders.push(order);

                // Tính toán doanh thu
                this.totalRevenue += order.price * order.quantity;
                this.totalOrders += order.quantity;
                this.avgOrderValue =
                  this.totalOrders > 0
                    ? this.totalRevenue / this.totalOrders
                    : 0;
              },
              (productError) => {
                console.error('Lỗi khi tìm nạp sản phẩm:', productError);
              }
            );
          });
        }
      },
      (err) => {
        this.error = err.error.message || 'Không thể tìm nạp đơn đặt hàng.';
      }
    );
  }
}
