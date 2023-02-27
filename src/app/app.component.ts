import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProductCollection, selectProducts } from './store/selectors/product.selector';
import { ProductAction } from './store/action/product.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assessment2';

  constructor(private store:Store){}

  product$=this.store.select(selectProducts)
  productCollection$=this.store.select(selectProductCollection)

  onAdd(productId:string){
    this.store.dispatch(ProductAction.addProduct({productId}))
  }

  onRemove(productId:string){
    this.store.dispatch(ProductAction.removeProduct({productId}))
  }
}
