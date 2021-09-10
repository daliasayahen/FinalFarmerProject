import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/servics/users.service';

@Component({
  selector: 'app-creatproductfarmer',
  templateUrl: './creatproductfarmer.component.html',
  styleUrls: ['./creatproductfarmer.component.css']
})
export class CreatproductfarmerComponent implements OnInit {

  formGroup=new FormGroup({
    userName:new FormControl('',[Validators.required]),
    phoneNumber:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    age:new FormControl('',Validators.required),
    roleId:new FormControl('',Validators.required),

  })
  constructor(private userService:UsersService,private toastr:ToastrService,
    private dialog:MatDialogRef<CreatproductfarmerComponent>, @Inject (MAT_DIALOG_DATA) public data:any )  { }
  ngOnInit(): void {
    //MAT_DIALOG_DATA  data is an object  ==> to set the data that the user entered into dialog to form group 
      this.formGroup.controls.ProductName.setValue(this.data.ProductName);
      this.formGroup.controls.ProductPrice.setValue(this.data.ProductPrice);
      this.formGroup.controls.ProductImg.setValue(this.data.ProductImg);
      this.formGroup.controls.ProductQuantity.setValue(this.data.ProductQuantity);
      this.formGroup.controls.CategoryID.setValue(this.data.CategoryID);
      this.formGroup.controls.UserID.setValue(this.data.UserID);
     

  }
  saveItem(){
    debugger
    //get the data from form group then check if there is data (from the user I named it data in constructor)
    //after that send this data to the functions in homeservices that hits to the apis 
    const value=this.formGroup.value;
    if(this.data){
      this.dialog.close({
        ...value,
      })
    }
    else{
      this.dialog.close(value);
    }
    this.userService.createUser(value);
  }


}
