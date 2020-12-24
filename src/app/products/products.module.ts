import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapComponent } from './map/map.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductsListItemComponent } from './products-list-item/products-list-item.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { PriceComponent } from './price/price.component';
import { PagerService } from './pager.service';
import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  imports: [
    CommonModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAz5DChTHUHSGcHR3BOLvjDFfLTfZQ1E8I',
    //   libraries: ['places']
    // }),
    BrowserAnimationsModule,
    NgbModule,
    TimeagoModule.forRoot(),
  ],
  declarations: [
    ProductsListComponent,
    ProductsListItemComponent,
    ProductsHomeComponent,
    SearchComponent,
    RatingStarsComponent,
    MapComponent,
    PriceComponent],
  exports: [
    ProductsListComponent,
    ProductsListItemComponent,
    ProductsHomeComponent,
    MapComponent,
    SearchComponent,

  ]
  ,
  providers: [
    PagerService,
  ]
})
export class ProductsModule { }
