import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product, ProductModel } from 'src/app/model/product.model';


@Injectable()
export class ProductService {

  productMockUrl: string = 'http://localhost:3000/product'

  constructor(
    private http: HttpClient
  ) { }

  getAllProduct(): Observable<ProductModel> {
    return this.http.get<ProductModel>(this.productMockUrl)
  }

  getAllWatch(): Observable<ProductModel> {
    return this.http.get<ProductModel>(this.productMockUrl + '/' + 1)
  }

  getAllHeadphones(): Observable<ProductModel> {
    return this.http.get<ProductModel>(this.productMockUrl + '/' + 2)
  }
}