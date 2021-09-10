import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerDashboardRoutingModule } from './farmer-dashboard-routing.module';
import { FarmerComponent } from './farmer/farmer.component';
import { ReviewformComponent } from './reviewform/reviewform.component';
import { ProductSoldoutComponent } from './product-soldout/product-soldout.component';
import { SharedModule } from '../shared/shared.module';
import { FarmerprodhomeComponent } from './farmerprodhome/farmerprodhome.component';
import { CreatproductfarmerComponent } from './creatproductfarmer/creatproductfarmer.component';
import { ProductsoldouthomeComponent } from './productsoldouthome/productsoldouthome.component';
import { ProductcardfarmerComponent } from './productcardfarmer/productcardfarmer.component';


@NgModule({
  declarations: [
    FarmerComponent,
    ReviewformComponent,
    ProductSoldoutComponent,
    FarmerprodhomeComponent,
    CreatproductfarmerComponent,
    ProductsoldouthomeComponent,
    ProductcardfarmerComponent,
  ],
  imports: [
    CommonModule,
    FarmerDashboardRoutingModule,
    SharedModule
  ]
})
export class FarmerDashboardModule { }
