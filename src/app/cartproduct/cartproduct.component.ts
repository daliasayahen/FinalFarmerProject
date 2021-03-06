import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../servics/cart.service';
import { LoginServiceService } from '../servics/login-service.service';
import { ProductServiceService } from '../servics/product-service.service';
import { UsersService } from '../servics/users.service';

@Component({
  selector: 'app-cartproduct',
  templateUrl: './cartproduct.component.html',
  styleUrls: ['./cartproduct.component.css']
})
export class CartproductComponent implements OnInit {

  @Input() productID:number|undefined
  @Input() productName:String|undefined
   @Input() productPrice:number|undefined
   @Input() productImg:any|undefined
   @Input() productQuantity:number|undefined
   @Input() categoryID:number|undefined
   @Input() userID:number|undefined
   Quantity:any;
   filterd:Array<any> = [];
totalpayment:number=0;
   paymentArr: Array<any> = [];
  constructor(private router:Router,public userService:UsersService,
    private toast:ToastrService , private spiner :NgxSpinnerService ,
    public productService:ProductServiceService,private cartService: CartService,public loginservice:LoginServiceService){}


  ngOnInit(): void {
    this.cartService.getUserCart().subscribe((data: any) => {
      this.paymentArr = data;
    });
    this.Filter();
    
  }
  getall(){
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
      this.productService.uploadAttachment(formData);
      }​​​


      insertRecord(Id: any,Quantity : any , ProductPrice:any) {
        console.log(this.Quantity);
            this.productID = Id;
          
          const val = {
            quantity: this.Quantity,
       amount :+Quantity*+ProductPrice,
        prouductId: Id,

        username: this.loginservice.username.value
            
          
            
           


          };
          console.log(val);

        
          console.log(val);
          this.cartService.Book(val).subscribe((res) => {
            this.toast.success('Add to cart');

          });
          console.log(val);
        }

        Filter() {
         
         
          this. paymentArr.forEach((element) => {
            if (
              element.username=this.loginservice.username.value)
              {
              this.filterd.push(element);
              this.totalpayment=this.totalpayment+element.amount
              
          }});
         
      
          
          return (this.paymentArr=this.filterd);
        }
      
      
      }
      
    
    


