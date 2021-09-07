import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ClientModule } from '../client/client.module';
import { ContactComponent } from '../contact/contact.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { HomePageComponent } from '../home-page/home-page.component';
import { AuthModule } from './auth.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent
  },
  // {
  //   path:'',
  //   component: AdminHomeComponent
  
  // },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'Register',
    component:RegisterComponent
  },
  {
    path:'Contact',
    component:ContactComponent
  },
  {
    path:'AboutUs',
    component:AboutusComponent
  },
  {
    path:'dashboard',
    loadChildren:()=>DashboardModule
  }

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
