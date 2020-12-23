import { ProductService } from './../../shared/Product.service';
import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';



@Component({
  selector: 'app-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  // unsubscribe$ = new Subject();
  products: Product[] = [];
  // productsPaged: Product[];
  // pager: any = {};
  // user: User;
  // productsLoading: boolean;
  // currentPagingPage: number;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.products = <Product[]>this.productService.getProducts();
  }

  getProducts() {
    // this.productsLoading = true;
    // this.productService
    //   .getProducts()
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe((products) => {
    //     this.products = <Product[]>products;
    //     this.setPage(this.currentPagingPage);
    //     this.productsLoading = false;
    //   });
  }

}
