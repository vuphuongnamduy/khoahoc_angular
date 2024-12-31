import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-search-management-component',
  templateUrl: './search-management-component.component.html',
  styleUrls: ['./search-management-component.component.scss']
})
export class SearchManagementComponentComponent implements OnInit {
  user: any;
  orders: any[] = [];
  error = '';
  searchOrderId: string = '';  // Biến lưu trữ ID đơn hàng tìm kiếm

  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _product: ProductService
  ) {
    this.user = this._auth.getUser();
  }

  ngOnInit(): void {
    // Khi vừa tải trang, bạn có thể gọi API để lấy tất cả đơn hàng
    this.fetchOrders();
  }

  // Hàm tìm kiếm
  onSearch(): void {
    if (this.searchOrderId) {
      this._api.getTypeRequest(`orders/${this.searchOrderId}`).subscribe(
        (res: any) => {
          if (res && res.data) {
            // Làm sạch danh sách đơn hàng trước khi cập nhật kết quả tìm kiếm
            this.orders = [];

            // Nếu tìm thấy đơn hàng, gộp thông tin sản phẩm và đơn hàng
            this._product.getSingleProduct(res.data.product_id).subscribe(
              (product) => {
                this.orders.push({ ...product, ...res.data });
              },
              (productError) => {
                this.error = 'Không thể lấy thông tin sản phẩm.';
              }
            );
          } else {
            this.error = 'Không tìm thấy đơn hàng với ID này.';
          }
        },
        (err) => {
          console.error('Error fetching order:', err);
          this.error = 'Không thể lấy dữ liệu từ API.';
        }
      );
    } else {
      this.error = 'Vui lòng nhập ID đơn hàng để tìm kiếm.';
      this.orders = [];
    }
  }

  // Hàm lấy tất cả đơn hàng khi mới tải trang
  fetchOrders(): void {
    this._api.getTypeRequest('orders/orderAll').subscribe(
      (res: any) => {
        console.log(res);
        res.data.forEach((item) => {
          this._product.getSingleProduct(item.product_id).subscribe((product) => {
            this.orders.push({ ...product, ...item });
          });
        });
      },
      (err) => {
        this.error = 'Lỗi khi tải danh sách đơn hàng.';
      }
    );
  }

}
