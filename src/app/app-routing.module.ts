import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsHomeComponent } from './products/products-home/products-home.component';


const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
