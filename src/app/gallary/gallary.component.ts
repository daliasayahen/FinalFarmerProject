import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomepageService } from '../servics/homepage.service';
import { ProductServiceService } from '../servics/product-service.service';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {

  constructor(private router:Router,public homepageservice:HomepageService,
    private toast:ToastrService , public productService:ProductServiceService,
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


  getall(){
    this.spiner.show();
    this.homepageservice.getall().subscribe((res:any)=>{
      this.homepageservice.data=res;
      this.spiner.hide();
      this.toast.success('Data Retrived');
  
    },err=>{
      this.spiner.hide();
      this.toast.error('something want worring');
    }
    )
  }
  getvegitablesProducts(){
    this.router.navigate(["Vegitable"]);


  }
getfruitsProducts(){
  this.router.navigate(["fruits"]);


}
goToAll(){
  this.router.navigate(["Gallary"]);

}

  // getallProductsByCategory(){
  //   this.spiner.show();
  //   this.productService.getAllproductsByCategory().subscribe((res:any)=>{
  //     this.homepageservice.data=res;
  //     this.spiner.hide();
  //     this.toast.success('Data Retrived');
  
  //   },err=>{
  //     this.spiner.hide();
  //     this.toast.error('something want worring');
  //   }
  //   )
  // }
}


