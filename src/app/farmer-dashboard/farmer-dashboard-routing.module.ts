import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from '../dashboard/product-card/product-card.component';
import { ProductHomeComponent } from '../dashboard/product-home/product-home.component';
import { ReviewHomeComponent } from '../dashboard/review-home/review-home.component';
import { FarmerComponent } from './farmer/farmer.component';
import { ProductSoldoutComponent } from './product-soldout/product-soldout.component';
import { ReviewformComponent } from './reviewform/reviewform.component';

const routes: Routes = [
  {
    path:'farmer',
    component: FarmerComponent
  },
  {
    path:'ProductCard',
    component:ProductCardComponent
  },
  {
    path:'ProductHome',
    component: ProductHomeComponent
  },
  {
    path:'Reviewform',
    component: ReviewformComponent
  },
  {
    path:'ProductSoldout',
    component: ProductSoldoutComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerDashboardRoutingModule { }
