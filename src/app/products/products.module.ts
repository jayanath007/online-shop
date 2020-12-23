import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsListItemComponent } from './products-list-item/products-list-item.component';
import { ProductsListComponent } from './products-list/products-list.component';

import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ProductsListComponent,
    ProductsListItemComponent,
  ],
  declarations: [ProductsComponent,
    ProductsListComponent,
    ProductsListItemComponent,]
})
export class ProductsModule { }
