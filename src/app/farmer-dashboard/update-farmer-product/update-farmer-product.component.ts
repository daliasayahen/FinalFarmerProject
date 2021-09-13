import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ProductServiceService } from 'src/app/servics/product-service.service';
import { UsersService } from 'src/app/servics/users.service';

@Component({
  selector: 'app-update-farmer-product',
  templateUrl: './update-farmer-product.component.html',
  styleUrls: ['./update-farmer-product.component.css']
})
export class UpdateFarmerProductComponent implements OnInit {

  formGroup=new FormGroup({
    productID:new FormControl('',Validators.required),
    productName:new FormControl('',[Validators.required]),
    productPrice:new FormControl('',Validators.required),
    productImg:new FormControl('',Validators.required),
    productQuantity:new FormControl('',Validators.required),
    categoryID:new FormControl('',Validators.required)

 })
 constructor(private productService:ProductServiceService,private toastr:ToastrService,
   private dialog:MatDialogRef<UpdateFarmerProductComponent>, @Inject (MAT_DIALOG_DATA) public data:any )  { }
 ngOnInit(): void {
   //MAT_DIALOG_DATA  data is an object  ==> to set the data that the user entered into dialog to form group 
          this.formGroup.controls.productID.setValue(parseInt(this.data.productID));
   this.formGroup.controls.productName.setValue(this.data.productName.toString());
      this.formGroup.controls.productPrice.setValue(parseInt(this.data.productPrice));
      this.formGroup.controls.productImg.setValue(this.data.productImg.toString());
      this.formGroup.controls.productQuantity.setValue(parseInt(this.data.productQuantity));
      this.formGroup.controls.categoryID.setValue(parseInt(this.data.categoryID));

 }
 productID2:any;
 productName2:any;
 productPrice2:any;
 productImg2:any;
 productQuantity2:any;
 categoryID2:any;
     

     saveItem(){
       debugger
       console.log(this.formGroup.value);
       this.productID2=this.formGroup.value.productID;
       this.productName2=this.formGroup.value.productName;
       this.productPrice2=this.formGroup.value.productPrice;
       this.productImg2=this.formGroup.value.productImg;
       this.productQuantity2=this.formGroup.value.productQuantity;
       this.categoryID2=this.formGroup.value.categoryID;
       
      const data2={
        productID:parseInt(this.productID2),
      productName:this.productName2.toString(),
      productPrice:parseInt(this.productPrice2),
       productImg:this.productImg2.toString(),
       productQuantity:parseInt(this.productQuantity2),
      categoryID:parseInt(this.categoryID2)
   
      }
      
       this.productService.UpdateProduct(data2);
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