import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewComponent } from './review/review.component';
import { FormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from './shared/shared.module';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import {HttpClientModule } from '@angular/common/http';
import { TistimonialComponent } from './tistimonial/tistimonial.component';
import { ProductComponent } from './product/product.component';
import { AboutUsHomeComponent } from './about-us-home/about-us-home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CartComponent } from './cart/cart.component';
import { GallaryComponent } from './gallary/gallary.component';
import { CheckoutpaymentComponent } from './checkoutpayment/checkoutpayment.component';
import { GalaryProductsComponent } from './galary-products/galary-products.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegitableComponent } from './vegitable/vegitable.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ReviewComponent,
    AboutusComponent,
    ContactComponent,
    HomePageComponent,
    TistimonialComponent,
    ProductComponent,
    AboutUsHomeComponent,
    CartComponent,
    GallaryComponent,
    CheckoutpaymentComponent,
    GalaryProductsComponent,
    FruitsComponent,
    VegitableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    SharedModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
    HttpClientModule,
    MatDialogModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
