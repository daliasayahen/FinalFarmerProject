import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraderDashboardRoutingModule } from './trader-dashboard-routing.module';
import { TraderComponent } from './trader/trader.component';


@NgModule({
  declarations: [
    TraderComponent
  ],
  imports: [
    CommonModule,
    TraderDashboardRoutingModule
  ]
})
export class TraderDashboardModule { }
