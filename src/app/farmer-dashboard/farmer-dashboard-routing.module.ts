import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductHomeComponent } from '../dashboard/product-home/product-home.component';
import { ReviewHomeComponent } from '../dashboard/review-home/review-home.component';
import { ProductComponent } from '../product/product.component';
import { CreatproductfarmerComponent } from './creatproductfarmer/creatproductfarmer.component';
import { FarmerComponent } from './farmer/farmer.component';
import { FarmerprodhomeComponent } from './farmerprodhome/farmerprodhome.component';
import { ProductSoldoutComponent } from './product-soldout/product-soldout.component';
import { ProductcardfarmerComponent } from './productcardfarmer/productcardfarmer.component';
import { ProductsoldouthomeComponent } from './productsoldouthome/productsoldouthome.component';
import { ReviewformComponent } from './reviewform/reviewform.component';

const routes: Routes = [
  {
    path:'farmer',
    component: FarmerComponent
  },
  {
    path:'Productcardfarmer',
    component:ProductcardfarmerComponent
  },

  {
    path:'Reviewform',
    component: ReviewformComponent
  },
  {
    path:'ProductSoldout',
    component: ProductSoldoutComponent
  },
  
  {
    path:'Farmerprodhome',
    component: FarmerprodhomeComponent
  },
  {
    path:'Creatproductfarmer',
    component: CreatproductfarmerComponent
  },
  {
    path:'Productsoldouthome',
    component: ProductsoldouthomeComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerDashboardRoutingModule { }
