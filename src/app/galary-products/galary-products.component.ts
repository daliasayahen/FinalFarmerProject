import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomepageService } from '../servics/homepage.service';
import { ProductServiceService } from '../servics/product-service.service';

@Component({
  selector: 'app-galary-products',
  templateUrl: './galary-products.component.html',
  styleUrls: ['./galary-products.component.css']
})
export class GalaryProductsComponent implements OnInit {

  constructor(private router:Router,public homepageservice:HomepageService,private toast:ToastrService , private spiner :NgxSpinnerService ,public productService:ProductServiceService){}

  @Input() productID:number|undefined
  @Input() productName:String|undefined
   @Input() productPrice:number|undefined
   @Input() productImg:any|undefined
   @Input() productQuantity:number|undefined
   @Input() categoryID:number|undefined
   @Input() userID:number|undefined
  ngOnInit(): void {
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
  getImagePath(value:string ){

    let basePath="../../../assets/DBimages/Uploaded File/";
   return basePath+value;
   
    }
}

