import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsHomeComponent } from './about-us-home/about-us-home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactComponent } from './contact/contact.component';
import { FarmerModule } from './farmer/farmer.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TistimonialComponent } from './tistimonial/tistimonial.component';
import { TraderModule } from './trader/trader.module';


const routes: Routes = [
  
  
  {
    path:'',
    loadChildren:()=>AuthModule
  },
  {
    path:'admin',
    loadChildren:()=>AdminModule
  },
  {
    path:'trader',
    loadChildren:()=>TraderModule
  },
  {
    path:'farmer',
    loadChildren:()=>FarmerModule
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
