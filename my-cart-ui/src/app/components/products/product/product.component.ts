import { Component, OnInit } from '@angular/core';
import { Product, ProductModel } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})

export class ProductComponent implements OnInit {

  allProduct: ProductModel[] = []

  constructor(
    public productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  getAllProduct(product: Product) {
    this.productService.getAllProduct().subscribe(
      (result: ProductModel) => {
        console.log(result);
      })
  }
}