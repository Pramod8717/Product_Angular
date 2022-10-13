import { Component, OnInit } from '@angular/core';
import { Product, ProductModel } from 'src/app/model/product.model';
import { MyCartService } from 'src/app/services/my-cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrls: ['./headphones.component.css'],
  providers: [ProductService, MyCartService]
})
export class HeadphonesComponent implements OnInit {

  allHeadphones: Product[] = []

  constructor(
    private productService: ProductService,
    private MyCartService: MyCartService
  ) { }

  ngOnInit(): void {
    this.getAllHeadphones()
  }

  getAllHeadphones(){
    this.productService.getAllHeadphones().subscribe(
      (allHeadphones: ProductModel) => {
        this.allHeadphones = allHeadphones.headphones as Product[]
      })
  }

  createMyCartProduct(product: Product) {
    product.qty = 1
    console.log(product);
    this.MyCartService.createMyCartProduct(product).subscribe()
  }

}
