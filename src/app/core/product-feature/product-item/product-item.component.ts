import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem!: Product;
  // calcdiscount=this.productItem.discount ? this.productItem.discount : this.productItem.price;
  constructor() { }

  ngOnInit(): void {
  }

}
