import { ProductService } from '../product.service';
import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { PagerService } from '../pager.service';



@Component({
  selector: 'app-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  // unsubscribe$ = new Subject();
  products: Product[] = [];
  productsPaged: Product[] = [];
  pager: any = {};
  // user: User;
  // productsLoading: boolean;
  // currentPagingPage: number;
  constructor(
    private productService: ProductService,
    private pagerService: PagerService,
  ) { }

  ngOnInit() {
    this.getProducts();
    this.products = <Product[]>this.productService.getProducts();
    this.setPage(1);
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

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.pagerService.getPager(this.products.length, page, 8);
    this.productsPaged = this.products.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }

}
