import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MapComponent } from './map/map.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductsListItemComponent } from './products-list-item/products-list-item.component';
import { ProductsListComponent } from './products-list/products-list.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ProductsListComponent,
    ProductsListItemComponent,
    ProductsHomeComponent,
    MapComponent,
  ],
  declarations: [
    ProductsListComponent,
    ProductsListItemComponent,
    ProductsHomeComponent,
    MapComponent]
})
export class ProductsModule { }
