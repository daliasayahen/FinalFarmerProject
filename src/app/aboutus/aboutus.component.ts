import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AboutUsService } from '../servics/about-us.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  @Input()description:String|undefined
  @Input() img:any|undefined
  
  constructor(private http:HttpClient , private toaster:ToastrService ,private spiner:NgxSpinnerService ,private router:Router,public aboutusService:AboutUsService) { }


  ngOnInit(): void {

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

  GoToLogin(){
    this.router.navigate(["Login"]);
  }

  GoToReg(){
    this.router.navigate(["Register"]);
  }
  GoToTestimonial(){
    this.router.navigate(["testimonial"]);
  }


 
  getImagePath(value:string ){

    let basePath="../../../assets/DBimages/Uploaded File/";
   return basePath+value;
   
    }

    uploadFile(files:any) {​​​
      if (files.length === 0) {​​​
      return;
      }​​​
      let fileToUpload = <File>files[0];
      const formData = new FormData();
      formData.append('file', fileToUpload, fileToUpload.name);
      this.aboutusService.uploadAttachment(formData);
      }​​​

  }


