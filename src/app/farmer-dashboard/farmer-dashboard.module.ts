import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerDashboardRoutingModule } from './farmer-dashboard-routing.module';
import { FarmerComponent } from './farmer/farmer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ReviewformComponent } from './reviewform/reviewform.component';
import { ProductSoldoutComponent } from './product-soldout/product-soldout.component';


@NgModule({
  declarations: [
    FarmerComponent,
    ProductCardComponent,
    ProductHomeComponent,
    ReviewformComponent,
    ProductSoldoutComponent,
  ],
  imports: [
    CommonModule,
    FarmerDashboardRoutingModule
  ]
})
export class FarmerDashboardModule { }
