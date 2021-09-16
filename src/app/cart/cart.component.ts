import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../servics/cart.service';
import { HomepageService } from '../servics/homepage.service';
import { LoginServiceService } from '../servics/login-service.service';
import { ProductServiceService} from '../servics/product-service.service';
import { UsersService } from '../servics/users.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  filterd:Array<any> = [];
  totalpayment:number=0;
     paymentArr: Array<any> = [];
     constructor(private router:Router,public userService:UsersService,
      private toast:ToastrService , private spiner :NgxSpinnerService ,
      public productService:ProductServiceService,private cartService: CartService,public loginservice:LoginServiceService){}
  
  
   getallproducts(){
    this.spiner.show();
    this.userService.getallproducts().subscribe((res:any)=>{
      this.userService.data=res;
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
    this.cartService.getUserCart().subscribe((data: any) => {
      this.paymentArr = data;
      
    });
    this.Filter(this.loginservice.username);
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

  Filter(username:any) {
         
         
    this. paymentArr.forEach((element) => {
      if (
        element.username==username)
        {
        this.filterd.push(element);
        this.totalpayment=this.totalpayment+element.amount
        
    }});
   
    console.log(this.filterd)
    
    return (this.paymentArr=this.filterd);
   
  }

confirm (username :any )
{

      
      const val = {
     
    username: username
        
    
      };
      this.cartService.confirm(val).subscribe((res) => {
      });

}
}





