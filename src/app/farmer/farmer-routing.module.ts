import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerHomeComponent } from './farmer-home/farmer-home.component';

const routes: Routes = [
  {
    path:'Farmerhome',
    component:FarmerHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerRoutingModule { }
