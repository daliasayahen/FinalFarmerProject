import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductServiceService } from 'src/app/servics/product-service.service';
import { TraderDashService } from 'src/app/servics/trader-dash.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() productID:number|undefined
  @Input() productName:String|undefined
   @Input() productPrice:number|undefined
   @Input() productImg:any|undefined
   @Input() productQuantity:number|undefined
   @Input() categoryID:number|undefined
   @Input() userID:number|undefined


  constructor(private router:Router,public traderService:TraderDashService,
    private toast:ToastrService , private spiner :NgxSpinnerService ,
    public productService:ProductServiceService){}
  ngOnInit(): void {
  }

 getall(){
    this.spiner.show();
    this. traderService.getallproducts().subscribe((res:any)=>{
      this. traderService.data=res;
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
      
      gotocart(){
        this.router.navigate(['Cart'])
      }
      

}
