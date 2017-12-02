import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';

const appRoutes: Routes = [
  { path : '', pathMatch: 'full', component : ProductListComponent },
  { path : 'products', component : ProductListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
