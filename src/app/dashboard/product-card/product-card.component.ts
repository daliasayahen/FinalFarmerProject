import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductComponent } from 'src/app/product/product.component';
import { CartService } from 'src/app/servics/cart.service';
import { HomepageService } from 'src/app/servics/homepage.service';
import { ProductServiceService } from 'src/app/servics/product-service.service';
import { UsersService } from 'src/app/servics/users.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  products: Array<object> = [];

  @Input() productID:number|undefined
  @Input() productName:String|undefined
   @Input() productPrice:number|undefined
   @Input() productImg:any|undefined
   @Input() productQuantity:number|undefined
   @Input() categoryID:number|undefined
   @Input() userID:number|undefined



  
   constructor(private router:Router,public userService:UsersService,
    private toast:ToastrService , private spiner :NgxSpinnerService ,
    public productService:ProductServiceService,private cartService: CartService){}

  ngOnInit(): void {
    //    this.getall();

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
    
    
      _addItemToCart( productId:any  ): void {
        let payload = {
          productID: productId,
        
        };
        this.productService.addToCart(payload)
         alert('Product Added');
      
      }​​​
      
      



    }
