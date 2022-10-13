import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/headphones.model';


@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.css']
})
export class GridCardComponent implements OnInit {

  @Input() allRecord: any
  @Input() tabType: string = ''
  @Output() productEvent = new EventEmitter<any>()
  @Output() productQtyEvent = new EventEmitter<Product>()

  constructor() { }

  ngOnInit(): void {
  }

  sendToProduct(record: any) {
    this.productEvent.emit(record)
  }

  addQty(currentProduct: Product) {
    currentProduct.qty = currentProduct.qty! + 1
    this.productQtyEvent.emit(currentProduct)
  }

  removeQty(currentProduct: Product) {
    if (currentProduct.qty! > 1) {
      currentProduct.qty = currentProduct.qty! - 1
      this.productQtyEvent.emit(currentProduct)
    }
  }

}
