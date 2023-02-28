import { Component ,Output, Input, EventEmitter} from '@angular/core';
import { product } from '../model/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-collection',
  templateUrl: './product-collection.component.html',
  styleUrls: ['./product-collection.component.css']
})
export class ProductCollectionComponent {
  @Input() products:ReadonlyArray<product> =[]
  @Output() remove= new EventEmitter<string>()

  constructor(private router:Router){}

  onClick(){
    this.router.navigate(['productlist'])
    
  }
}
