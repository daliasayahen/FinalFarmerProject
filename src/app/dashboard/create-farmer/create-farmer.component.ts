import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA,  } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/servics/users.service';

@Component({
  selector: 'app-create-farmer',
  templateUrl: './create-farmer.component.html',
  styleUrls: ['./create-farmer.component.css']
})
export class CreateFarmerComponent implements OnInit {



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
    private dialog:MatDialogRef<CreateFarmerComponent>, @Inject (MAT_DIALOG_DATA) public data:any )  { }
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
    //get the data from form group then check if there is data (from the user I named it data in constructor)
    //after that send this data to the functions in homeservices that hits to the apis 
    this.userId2=this.formGroup.value.userID;
    this.username2=this.formGroup.value.userName;
    this.phoneNumber2=this.formGroup.value.phoneNumber;
    this.email2=this.formGroup.value.email;
    this.password2=this.formGroup.value.password;
    this.address2=this.formGroup.value.address;
    this.age2=this.formGroup.value.age;
    this.roleId2=this.formGroup.value.roleId;


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

