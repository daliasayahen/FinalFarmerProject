import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/servics/users.service';
import { CreateFarmerComponent } from '../create-farmer/create-farmer.component';

@Component({
  selector: 'app-create-trader',
  templateUrl: './create-trader.component.html',
  styleUrls: ['./create-trader.component.css']
})
export class CreateTraderComponent implements OnInit {

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
    private dialog:MatDialogRef<CreateTraderComponent>, @Inject (MAT_DIALOG_DATA) public data:any )  { }
  ngOnInit(): void {
    //MAT_DIALOG_DATA  data is an object  ==> to set the data that the user entered into dialog to form group 
      this.formGroup.controls.userName.setValue(this.data.userName);
      this.formGroup.controls.phoneNumber.setValue(this.data.phoneNumber);
      this.formGroup.controls.email.setValue(this.data.email);
      this.formGroup.controls.password.setValue(this.data.password);
      this.formGroup.controls.address.setValue(this.data.address);
      this.formGroup.controls.age.setValue(this.data.age);
      this.formGroup.controls.roleId.setValue(this.data.roleId);

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
// function MAT_DIALOG_DATA(MAT_DIALOG_DATA: any) {
//   throw new Error('Function not implemented.');
// }


