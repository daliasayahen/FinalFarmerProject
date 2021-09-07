import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { AdminComponent } from './admin/admin.component';
import { CreateFarmerComponent } from './create-farmer/create-farmer.component';
import { CreateTraderComponent } from './create-trader/create-trader.component';
import { FarmerHomeComponent } from './farmer-home/farmer-home.component';
import { FramerComponent } from './framer/framer.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ReviewHomeComponent } from './review-home/review-home.component';
import { TraderComponent } from './trader/trader.component';
import { TraderhomeComponent } from './traderhome/traderhome.component';

const routes: Routes = [
  {
    path:'admin',
    component: AdminComponent
  },
  {
    path:'farmer',
    component: FramerComponent
  },
  {
    path:'farmerhome',
    component: FarmerHomeComponent
  },
  {
    path:'traderhome',
    component: TraderhomeComponent
  },
  {
    path:'producthome',
    component: ProductHomeComponent
  },
  {
    path:'reviewCard',
    component: ProductHomeComponent
  },
  {
    path:'reviewHome',
    component: ReviewHomeComponent
  },
  {
    path:'createFarmr',
    component: CreateFarmerComponent
  },
  {
    path:'createtrader',
    component: CreateTraderComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
