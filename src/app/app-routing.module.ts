import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsHomeComponent } from './about-us-home/about-us-home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutpaymentComponent } from './checkoutpayment/checkoutpayment.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FarmerDashboardModule } from './farmer-dashboard/farmer-dashboard.module';
import { FooterComponent } from './footer/footer.component';
import { FruitsComponent } from './fruits/fruits.component';
import { GalaryProductsComponent } from './galary-products/galary-products.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TistimonialComponent } from './tistimonial/tistimonial.component';
import { TraderDashboardModule } from './trader-dashboard/trader-dashboard.module';


const routes: Routes = [
  
  
  {
    path:'',
    loadChildren:()=>AuthModule
   
  },
  
  {
    path:'dashboard',
    loadChildren:()=>DashboardModule
  },
  {
    path:'Traderdashboard',
    loadChildren:()=>TraderDashboardModule
  },
  {
    path:'Farmerdashboard',
    loadChildren:()=>FarmerDashboardModule
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  
  {
    path:'testimonial',
    component:TistimonialComponent
  },
  {
    path:'aboutUsHome',
    component:AboutUsHomeComponent
  },
  {
    path:'HomePage',
    component:HomePageComponent
  },
  {
    path:'Cart',
    component:CartComponent
  },
  {
    path:'Gallary',
    component:GallaryComponent
  },
  {
    path:'Checkoutpayment',
    component:CheckoutpaymentComponent
  },
  {
    path:'fruits',
    component:FruitsComponent
  },
  {
    path:'GalaryProducts',
    component:GalaryProductsComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
