import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductAction } from 'src/app/store/action/product.action';
import { selectProductCollection } from 'src/app/store/selectors/product.selector';

@Component({
  selector: 'app-product-collecion',
  templateUrl: './product-collecion.component.html',
  styleUrls: ['./product-collecion.component.css']
})
export class ProductCollecionComponent {
  productCollection$=this.store.select(selectProductCollection)
  constructor(private store:Store){}
  onRemove(productId:string){
    this.store.dispatch(ProductAction.removeProduct({productId}))
  }
}
