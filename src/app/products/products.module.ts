import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MapComponent } from './map/map.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductsListItemComponent } from './products-list-item/products-list-item.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAz5DChTHUHSGcHR3BOLvjDFfLTfZQ1E8I',
      libraries: ['places']
    })
  ],
  exports: [
    ProductsListComponent,
    ProductsListItemComponent,
    ProductsHomeComponent,
    MapComponent,
    SearchComponent,
  ],
  declarations: [
    ProductsListComponent,
    ProductsListItemComponent,
    ProductsHomeComponent,
    SearchComponent,
    MapComponent]
})
export class ProductsModule { }
