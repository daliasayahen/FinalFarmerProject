import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomepageService } from '../servics/homepage.service';
import { ProductServiceService } from '../servics/product-service.service';
import { ReviewService } from '../servics/review.service';
import { TestimonialService } from '../servics/testimonial.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  constructor(private router:Router,public homepageservice:HomepageService,private toast:ToastrService ,public productService:ProductServiceService 
   , private spiner :NgxSpinnerService,public reviewservice:ReviewService,public tetimonialService:TestimonialService)
   { 
  }

  ngOnInit(): void {
    this.getallfruits();
 
  }
  goToAll(){
    this.router.navigate(["Gallary"]);
  
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
  Gallary(){
    this.router.navigate(["Gallary"]);
  }
  getvegitablesProducts(){
    this.router.navigate(["Vegitable"]);


  }
getfruitsProducts(){
  this.router.navigate(["fruits"]);


}
getallfruits(){
  // this.spiner.show();
   this.productService.getAllfruitsProducts().subscribe((res:any)=>{
     this.productService.data=res;
     this.spiner.hide();
     this.toast.success('Data Retrived');
 
   },err=>{
     this.spiner.hide();
     this.toast.error('something want worring');
   }
   )
 }
}
