import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCollecionComponent } from './container/product-collecion/product-collecion.component';
// import { ProductCollectionComponent } from './product-collection/product-collection.component';
import { ProductLisComponent } from './container/product-lis/product-lis.component';

const routes: Routes = [
  {path:'productlist',component:ProductLisComponent},
  {path:'cart',component:ProductCollecionComponent},
  {path:'',component:ProductCollecionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
