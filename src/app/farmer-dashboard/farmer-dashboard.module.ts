import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerDashboardRoutingModule } from './farmer-dashboard-routing.module';
import { FarmerComponent } from './farmer/farmer.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ReviewformComponent } from './reviewform/reviewform.component';
import { ProductSoldoutComponent } from './product-soldout/product-soldout.component';
import { SharedModule } from '../shared/shared.module';
import { ReviewhomeComponent } from './reviewhome/reviewhome.component';
import { FarmerprodhomeComponent } from './farmerprodhome/farmerprodhome.component';


@NgModule({
  declarations: [
    FarmerComponent,
    ProductCardComponent,
    
    ReviewformComponent,
    ProductSoldoutComponent,
    ReviewhomeComponent,
    FarmerprodhomeComponent,
  ],
  imports: [
    CommonModule,
    FarmerDashboardRoutingModule,
    SharedModule
  ]
})
export class FarmerDashboardModule { }
