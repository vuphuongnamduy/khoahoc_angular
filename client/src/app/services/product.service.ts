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

  constructor(private http: HttpClient, private _api: ApiService) { }

  getAllProducts(limitOfResults = 1000, page): Observable<Products> {
    return this.http.get<Products>(this.url + 'products', {
      params: {
        limit: limitOfResults.toString(),
        page: page,
      },
    });
  }

  getSingleProduct(id: Number): Observable<any> {
    console.log(id);
    return this._api.getTypeRequest('products/' + id);
  }

  addProduct(productData: any): Observable<any> {
    console.log(productData);
    const data = {
      "title": productData.name,
      "cat_id": productData.category,
      "description": productData.short_desc,
      "image": productData.image,
      "price": productData.price,
      "quantity": productData.quantity,
      "images": "",
      "short_desc": productData.short_desc
    }
    return this.http.post(this.url + 'products', data);
  }

  updateProduct(productId: any, productData: any): Observable<any> {
    const categories = [
      { id: 1, name: 'Shoes' },
      { id: 2, name: 'Electronics' },
    ];
    const categoryId = categories.find(category => category.name === productData.category)?.id;

    const data = {
      "title": productData.title,
      "cat_id": categoryId,
      "description": productData.short_desc,
      "image": productData.image,
      "price": productData.price,
      "quantity": productData.quantity,
      "images": "",
      "short_desc": productData.short_desc
    }
    return this.http.put(this.url + 'products/' + productId, data);
  }

  deleteProduct(productId: any): Observable<any> {
    return this.http.delete(this.url + 'products/' + productId);
  }

}
