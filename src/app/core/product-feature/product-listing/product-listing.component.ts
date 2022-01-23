import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  productArray: Product[]=[];

  @Output()
  itemAdded :EventEmitter<Product>=new EventEmitter<Product>();
  constructor() {
    this.productArray=[
      {id:1,name:"Camira",price:100,discount:10,imageUrl:'https://picsum.photos/200/300'},
      {id:2,name:"photoCamira",price:100,imageUrl:'https://picsum.photos/200/301'},
      {id:3,name:"labtop",price:1000,discount:10,imageUrl:'https://picsum.photos/200/302'},
      {id:4,name:"Pc",price:2000,discount:10,imageUrl:'https://picsum.photos/200/303'},
      {id:5,name:"Mobile",price:3000,imageUrl:'https://picsum.photos/200/304'},
      {id:6,name:"tablet",price:1000,discount:10,imageUrl:'https://picsum.photos/200/305'},
      {id:7,name:"Tv",price:2000,discount:10,imageUrl:'https://picsum.photos/200/306'},
      {id:8,name:"Fridge",price:3000,imageUrl:'https://picsum.photos/200/307'},
    ]
  }

  ngOnInit(): void {
  }
  onItemAddedToCart(product:Product){
    console.log(product);
    this.itemAdded.emit(product);
  }

}
function OutPut() {
  throw new Error('Function not implemented.');
}



