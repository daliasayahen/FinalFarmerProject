import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomepageService } from '../servics/homepage.service';
import { RegServiceService } from '../servics/reg-service.service';

@Component({
  selector: 'app-checkoutpayment',
  templateUrl: './checkoutpayment.component.html',
  styleUrls: ['./checkoutpayment.component.css']
})
export class CheckoutpaymentComponent implements OnInit {

  



  constructor(private router:Router,private toast:ToastrService , 
    private spiner :NgxSpinnerService) { }

  ngOnInit(): void {
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

  

}

