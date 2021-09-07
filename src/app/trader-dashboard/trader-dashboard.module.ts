import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraderDashboardRoutingModule } from './trader-dashboard-routing.module';
import { TraderComponent } from './trader/trader.component';
import { SharedModule } from '../shared/shared.module';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductHomeComponent } from './product-home/product-home.component';


@NgModule({
  declarations: [
    TraderComponent,
    ProductCardComponent,
    ProductHomeComponent
  ],
  imports: [
    CommonModule,
    TraderDashboardRoutingModule,
    SharedModule
  ]
})
export class TraderDashboardModule { }
