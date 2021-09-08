import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from '../dashboard/product-card/product-card.component';
import { ProductHomeComponent } from '../dashboard/product-home/product-home.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { TraderComponent } from './trader/trader.component';

const routes: Routes = [
  
    {
       path:'Trader',
       component: TraderComponent
    },
    {
      path:'ProductCard',
      component: ProductCardComponent
   },
   {
    path:'ProductHome',
    component: ProductHomeComponent
 },
 {
   path:'AddReview',
   component: AddReviewComponent
}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraderDashboardRoutingModule { }
