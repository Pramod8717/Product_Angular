import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductModel } from 'src/app/model/product.model';

@Injectable()
export class MyCartService {

  mockUrl: string = 'http://localhost:3000/my-cart'

  constructor(
    private http: HttpClient
  ) { }

  getAllMyCartProduct(): Observable<ProductModel> {
    return this.http.get<ProductModel>(this.mockUrl)
  }

  createMyCartProduct(product: Product): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.mockUrl, product)
  }

  updateMyCartProductById(product: Product): Observable<Product> {
    return this.http.put<Product>(this.mockUrl + '/' + product.id, product)
  }
}