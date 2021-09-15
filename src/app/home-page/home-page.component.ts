import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomepageService } from '../servics/homepage.service';
import { ReviewService } from '../servics/review.service';
import { TestimonialService } from '../servics/testimonial.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  currentYear: Date | any = undefined;
  constructor(private router:Router,public homepageservice:HomepageService,private toast:ToastrService , 
    private spiner :NgxSpinnerService,public reviewservice:ReviewService,public tetimonialService:TestimonialService)
   { 
  }

  ngOnInit(): void {
    this.getall();
    this.getallReview();
    this.getalltestimonial();
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

  getall(){
   // this.spiner.show();
    this.homepageservice.getall().subscribe((res:any)=>{
      this.homepageservice.data=res;
      this.spiner.hide();
     // this.toast.success('Data Retrived');
  
    },err=>{
      this.spiner.hide();
      this.toast.error('something want worring');
    }
    )
  }
  getallReview(){
   // this.spiner.show();
    debugger
    this.reviewservice.getall().subscribe((res:any)=>{
      this.reviewservice.data=res;
      this.spiner.hide();
     // this.toast.success('Data Retrived');
  
    },err=>{
      this.spiner.hide();
      this.toast.error('something want worring');
    }
    )
  }
  getalltestimonial(){
   // this.spiner.show();
    debugger
    this.tetimonialService.getall().subscribe((res:any)=>{
      this.tetimonialService.data=res;
      this.spiner.hide();
     // this.toast.success('Data Retrived');
  
    },err=>{
      this.spiner.hide();
      this.toast.error('something want worring');
    }
    )
  }


  AddtoCart(){
    this.router.navigate(['Login'])
  }
}
