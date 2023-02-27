import { Component ,Output, Input, EventEmitter} from '@angular/core';
import { product } from '../model/product.model';


@Component({
  selector: 'app-product-collection',
  templateUrl: './product-collection.component.html',
  styleUrls: ['./product-collection.component.css']
})
export class ProductCollectionComponent {
  @Input() products:ReadonlyArray<product> =[]
  @Output() remove= new EventEmitter<string>()
}
