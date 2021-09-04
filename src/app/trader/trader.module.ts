import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraderRoutingModule } from './trader-routing.module';
import { TraderHomeComponent } from './trader-home/trader-home.component';


@NgModule({
  declarations: [
    TraderHomeComponent
  ],
  imports: [
    CommonModule,
    TraderRoutingModule
  ]
})
export class TraderModule { }
