import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomepageService } from '../servics/homepage.service';
import { ProductServiceService } from '../servics/product-service.service';
import { UsersService } from '../servics/users.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router:Router,private toast:ToastrService , public userservice:UsersService
   , private spiner :NgxSpinnerService) { }


   getallproducts(){
    this.spiner.show();
    this.userservice.getallproducts().subscribe((res:any)=>{
      this.userservice.data=res;
      this.spiner.hide();
      this.toast.success('Data Retrived');
  
    },err=>{
      this.spiner.hide();
      this.toast.error('something want worring');
    }
    )

  }
  
  ngOnInit(): void {
    this.getallproducts();
  }

  GoToLogin(){
    this.router.navigate(["Login"]);
  }
  GoToReg(){
    this.router.navigate(["Register"]);
  }
  GoToContact(){
    this.router.navigate(["Contact"]);

  }
  GoToAboutUs(){
    this.router.navigate(["AboutUs"]);
  }
  Home(){
    this.router.navigate([""]);

  }
  AboutUs(){
    this.router.navigate(["aboutUsHome"]);

  }
  ContactUs(){

    this.router.navigate(["contact"]);
    
  }

  GoToTestimonial(){
    this.router.navigate(["testimonial"]);
  }


  Checkout(){
    this.router.navigate(["Checkoutpayment"]);
  }


  }



