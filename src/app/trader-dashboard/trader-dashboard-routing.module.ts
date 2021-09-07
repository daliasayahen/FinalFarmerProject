import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraderComponent } from '../dashboard/trader/trader.component';

const routes: Routes = [
  
    {
       path:'Trader',
       component: TraderComponent
    }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraderDashboardRoutingModule { }
