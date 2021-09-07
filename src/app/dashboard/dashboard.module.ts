import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminComponent } from './admin/admin.component';
import { TraderComponent } from './trader/trader.component';
import { FramerComponent } from './framer/framer.component';
import { SharedModule } from '../shared/shared.module';
import { FarmerHomeComponent } from './farmer-home/farmer-home.component';
import { TraderhomeComponent } from './traderhome/traderhome.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import { ReviewHomeComponent } from './review-home/review-home.component';
import { CreateFarmerComponent } from './create-farmer/create-farmer.component';


@NgModule({
  declarations: [
    AdminComponent,
    TraderComponent,
    FramerComponent,
    FarmerHomeComponent,
    TraderhomeComponent,
    ProductHomeComponent,
    ProductCardComponent,
    ReviewCardComponent,
    ReviewHomeComponent,
    CreateFarmerComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
