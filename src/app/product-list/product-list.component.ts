import { Component, Input, Output,EventEmitter } from '@angular/core';
import { product } from '../model/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products:ReadonlyArray<product> =[]
  @Output() add=new EventEmitter<string>();

  constructor(private router:Router) {
    
  }
  onClick(){
    this.router.navigate(['cart'])
  }
}
