import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent  {
  // unsubscribe$ = new Subject();
  // products: Product[];
  // productsPaged: Product[];
  // pager: any = {};
  // user: User;
  // productsLoading: boolean;
  // currentPagingPage: number;

  constructor(
  ) {}

  ngOnInit() {
    // this.authService.user
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe((user) => {
    //     this.user = user;
    //   });
    // this.uiService.currentPagingPage$
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe((page) => {
    //     this.currentPagingPage = page;
    //   });
    this.getProducts();
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

  // onDisplayModeChange(mode: string, e: Event) {
  //   this.uiService.displayMode$.next(mode);
  //   e.preventDefault();
  // }

  // setPage(page: number) {
  //   if (page < 1 || page > this.pager.totalPages) {
  //     return;
  //   }
  //   this.pager = this.pagerService.getPager(this.products.length, page, 8);
  //   this.productsPaged = this.products.slice(
  //     this.pager.startIndex,
  //     this.pager.endIndex + 1
  //   );
  //   this.uiService.currentPagingPage$.next(page);
  // }

  // onSort(sortBy: string) {
  //   this.sortPipe.transform(
  //     this.products,
  //     sortBy.replace(':reverse', ''),
  //     sortBy.endsWith(':reverse')
  //   );
  //   this.uiService.sorting$.next(sortBy);
  //   this.setPage(1);
  // }

  // ngOnDestroy() {
  //   this.unsubscribe$.next();
  //   this.unsubscribe$.complete();
  // }
}
