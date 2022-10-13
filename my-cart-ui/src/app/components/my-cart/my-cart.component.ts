import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { MyCartService } from 'src/app/services/my-cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css'],
  providers: [MyCartService]
})
export class MyCartComponent implements OnInit {

  allProduct: Product[] = []

  constructor(
    private myCartService: MyCartService
  ) { }

  ngOnInit(): void {
    this.getAllMyCartProduct()
  }

  getAllMyCartProduct() {
    this.myCartService.getAllMyCartProduct().subscribe(
      (allProduct: any) => {
        this.allProduct = allProduct
      })
  }

  updateMyCartProductById(currentProduct: Product) {
    this.myCartService.updateMyCartProductById(currentProduct).subscribe(
      () => {
        this.getAllMyCartProduct()
      }
    )
  }
}
