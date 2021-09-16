import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductServiceService } from 'src/app/servics/product-service.service';
import { UsersService } from 'src/app/servics/users.service';

@Component({
  selector: 'app-productcardfarmer',
  templateUrl: './productcardfarmer.component.html',
  styleUrls: ['./productcardfarmer.component.css']
})
export class ProductcardfarmerComponent implements OnInit {
  @Input() productID:number|undefined
  @Input() productName:String|undefined
   @Input() productPrice:number|undefined
   @Input() productImg:any|undefined
   @Input() productQuantity:number|undefined
   @Input() categoryID:number|undefined
   @Input() userID:number|undefined


  
   constructor(private router:Router,
    private toast:ToastrService , private spiner :NgxSpinnerService ,
    public productService:ProductServiceService){}

  ngOnInit(): void {
    //    this.getall();

  }
  getall(){
    this.spiner.show();
    this.productService.getall().subscribe((res:any)=>{
      this.productService.data=res;
      this.spiner.hide();
      this.toast.success('Data Retrived');
  
    },err=>{
      this.spiner.hide();
      this.toast.error('something want worring');
    }
    )
  }

  DeleteItem(id:any){
    if(this.productID){
      
      debugger
      this.productService.DeleteProduct(id);
      this.toast.success('Deleted Item');
    }else{
      this.toast.warning('This item connot be deleted');
    }
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
    }

   
  