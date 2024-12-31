import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Products, Product } from '../shared/models/product.model';

@Component({
  selector: 'app-product-management-component',
  templateUrl: './product-management-component.component.html',
  styleUrls: ['./product-management-component.component.scss']
})
export class ProductManagementComponentComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = { id: 0, name: '', category: '', description: '', image: '', price: 0, quantity: 0, images: '' };
  isEditing = false;
  selectedProduct: Product = { id: 0, name: '', category: '', description: '', image: '', price: 0, quantity: 0, images: '' };
  productPageCounter = 1;
  categories = [
    { id: 1, name: 'Forex' },
    { id: 2, name: 'Crpyto' },
    { id: 3, name: 'FREE MATERIALS'}
  ];
  constructor(private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts(10000, this.productPageCounter).subscribe(
      (res: any) => {
        console.log(res);
        this.products = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  handleProducts() : void {
    this.productService.getAllProducts(10000, this.productPageCounter).subscribe(
      (res: any) => {
        console.log(res);
        this.products = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // Hàm thêm sản phẩm
  addProduct(): void {
    this.productService.addProduct(this.newProduct).subscribe(
      (res: Product) => {
        this.products.push(res); // Thêm sản phẩm vào danh sách
        this.newProduct = { id: 0, name: '', category: '', description: '', image: '', price: 0, quantity: 0, images: '' }; // Đặt lại form
        alert("Thêm sản phẩm thành công");
        this.handleProducts();
        window.location.reload();
      },
      (err) => {
        console.error("Lỗi khi thêm sản phẩm: ", err);
        alert("Thêm sản phẩm thành công");
        this.handleProducts();
        window.location.reload();

      }
    );
  }

  // Hàm bắt đầu chỉnh sửa sản phẩm
  editProduct(product: Product): void {
    this.selectedProduct = { ...product };
    console.log(this.selectedProduct); // In ra để kiểm tra giá trị
    this.isEditing = true;
  }

  // Hàm cập nhật sản phẩm sau khi chỉnh sửa
  updateProduct(): void {
    this.productService.updateProduct(this.selectedProduct.id, this.selectedProduct).subscribe(
      (res: Product) => {
        const index = this.products.findIndex((p) => p.id === res.id);
        if (index !== -1) {
          this.products[index] = { ...res }; // Cập nhật sản phẩm trong danh sách
        }
        this.isEditing = false; // Kết thúc chỉnh sửa
        this.selectedProduct = { id: 0, name: '', category: '', description: '', image: '', price: 0, quantity: 0, images: '' };
        this.handleProducts();
        alert("Cập nhật sản phẩm thành công");
        window.location.reload();


      },
      (err) => {
        console.error("Lỗi khi cập nhật sản phẩm: ", err);
        alert("Cập nhật sản phẩm thành công");
        this.handleProducts();
        window.location.reload();
      }
    );
  }

  // Hàm xóa sản phẩm
  deleteProduct(product: Product): void {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      this.productService.deleteProduct(product.id).subscribe(
        (res) => {
          console.log(res);
          this.products = this.products.filter((p) => p.id !== product.id); // Xóa sản phẩm khỏi danh sách
          alert("Xóa sản phẩm thành công");
          this.handleProducts();
          window.location.reload();
        },
        (err) => {
          alert("Xóa sản phẩm thành công");
          this.handleProducts();
          window.location.reload();
          console.error("Lỗi khi xóa sản phẩm: ", err);
        }
      );
    }
  }

}
