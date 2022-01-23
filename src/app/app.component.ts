import { Component } from '@angular/core';
import { Product } from './_models/product/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';
  addedProduct: Product[]=[];
  counter=1;
  onItemAdded(product:Product){
    console.log(product);

    this.addedProduct.push(product);
  }
}
