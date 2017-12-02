import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { AllanComponent } from './allan/allan.component';

const appRoutes: Routes = [
  { path : '', pathMatch: 'full', component : ProductsComponent },
  { path : 'products', component : ProductsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductsComponent,
    AllanComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
