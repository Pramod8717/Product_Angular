import { Component, OnInit } from '@angular/core';
import { Product, ProductModel } from 'src/app/model/product.model';
import { MyCartService } from 'src/app/services/my-cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css'],
  providers: [ProductService, MyCartService]
})
export class WatchComponent implements OnInit {

  allWatch: Product[] = []

  constructor(
    private productService: ProductService,
    private myCartService: MyCartService
  ) { }

  ngOnInit(): void {
    this.getAllWatch()
  }

  getAllWatch() {
    this.productService.getAllWatch().subscribe(
      (allWatch: ProductModel) => {
        this.allWatch = allWatch.watch as Product[]
      })
  }

  createMyCartProduct(product: Product) {
    product.qty = 1
    this.myCartService.createMyCartProduct(product).subscribe()
  }

}
