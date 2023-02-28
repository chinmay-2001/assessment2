import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductAction } from 'src/app/store/action/product.action';
import { selectProducts } from 'src/app/store/selectors/product.selector';
@Component({
  selector: 'app-product-lis',
  templateUrl: './product-lis.component.html',
  styleUrls: ['./product-lis.component.css']
})
export class ProductLisComponent {
  

  product$=this.store.select(selectProducts)
  constructor(private store:Store,private router:Router){}

  onAdd(productId:string){
    this.store.dispatch(ProductAction.addProduct({productId}))
    
  }
}
