import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.scss']
})
export class ProductsListItemComponent implements OnInit, OnDestroy {

  @Input() product: Product = new Product();
  public imageLoading: boolean = true

  constructor(
  ) { }

  ngOnInit() {
    this.imageLoading = true;

  }

  public onAddToCart() {

  }

  public onImageLoad() {
    this.imageLoading = false;
  }

  ngOnDestroy() {

  }

  
  
}
