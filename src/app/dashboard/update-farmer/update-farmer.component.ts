import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/servics/users.service';
import { CreateFarmerComponent } from '../create-farmer/create-farmer.component';

@Component({
  selector: 'app-update-farmer',
  templateUrl: './update-farmer.component.html',
  styleUrls: ['./update-farmer.component.css']
})
export class UpdateFarmerComponent implements OnInit {

  formGroup=new FormGroup({
     userID:new FormControl('',[Validators.required]),
    userName:new FormControl('',[Validators.required]),
    phoneNumber:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    age:new FormControl('',Validators.required),
    roleId:new FormControl('',Validators.required),

  })
  constructor(private userService:UsersService,private toastr:ToastrService,
    private dialog:MatDialogRef<UpdateFarmerComponent>, @Inject (MAT_DIALOG_DATA) public data:any )  { }
  ngOnInit(): void {
    //MAT_DIALOG_DATA  data is an object  ==> to set the data that the user entered into dialog to form group 
    
     this.formGroup.controls.userID.setValue(parseInt(this.data.userID));
     this.formGroup.controls.userName.setValue(this.data.userName.toString());
      this.formGroup.controls.phoneNumber.setValue(this.data.phoneNumber.toString());
      this.formGroup.controls.email.setValue(this.data.email.toString());
      this.formGroup.controls.password.setValue(this.data.password.toString());
      this.formGroup.controls.address.setValue(this.data.address.toString());
      this.formGroup.controls.age.setValue(parseInt(this.data.age));
      this.formGroup.controls.roleId.setValue(parseInt(this.data.roleId));

  }
   userId2:any;
  username2:any;
  phoneNumber2:any;
  email2:any;
  password2:any;
  address2:any;
  age2:any;
  roleId2:any;
  saveItem(){
    debugger
    console.log(this.formGroup.value);
    this.userId2=this.formGroup.value.userID;
    this.username2=this.formGroup.value.userName;
    this.phoneNumber2=this.formGroup.value.phoneNumber;
    this.email2=this.formGroup.value.email;
    this.password2=this.formGroup.value.password;
    this.address2=this.formGroup.value.address;
    this.age2=this.formGroup.value.age;
    this.roleId2=this.formGroup.value.roleId;
   const data2={
     userId:parseInt(this.userId2),
 username:this.username2.toString(),
 phoneNumber:this.phoneNumber2.toString(),
 email:this.email2.toString(),
 password:this.password2.toString(),
address:this.address2.toString(),
 age:parseInt(this.age2),

 roleId:parseInt(this.roleId2),

   }
    this.userService.UpdateUser(data2);
  }


}
// function MAT_DIALOG_DATA(MAT_DIALOG_DATA: any) {
//   throw new Error('Function not implemented.');
// }

