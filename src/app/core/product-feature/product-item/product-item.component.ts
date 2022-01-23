import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem!: Product;

  @Output()
  itemAddedToCart :EventEmitter<Product>=new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }
  onItemAdded(){
    console.log(this.productItem);
    this.itemAddedToCart.emit(this.productItem);

  }

}
