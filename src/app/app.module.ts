import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { collectionReducer } from './store/reducer/collection.reducer';
import { productReducer } from './store/reducer/product.reducer';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCollectionComponent } from './product-collection/product-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({products:productReducer, collection:collectionReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
