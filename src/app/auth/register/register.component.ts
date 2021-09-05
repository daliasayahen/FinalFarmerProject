import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/servics/auth.service';
import { RegServiceService } from 'src/app/servics/reg-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister:FormGroup=new FormGroup({
    userName:new FormControl('',[Validators.required]),
    phoneNumber: new FormControl(''),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
   // confirmPassword:new FormControl('',[Validators.required,Validators.minLength(8)]),
   address:new FormControl('',[Validators.required]),
   age:new FormControl(''),
   roleId:new FormControl('')

  
  }
  )

  constructor(private router:Router, private regService:RegServiceService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }
  
  submit() {
    console.log(this.formRegister.value);
    const formValue=this.formRegister.value;
    formValue.userName=this.formRegister.value.userName.toString();
    formValue.phoneNumber=this.formRegister.value.phoneNumber.toString();
    formValue.email=this.formRegister.value.email;
    formValue.password=this.formRegister.value.password.toString();
    formValue.address=this.formRegister.value.address.toString();
    formValue.age=parseInt(this.formRegister.value.age);
    formValue.roleId=parseInt(this.formRegister.value.roleId);

    setTimeout(() => {
      //  this.router.navigate(['Login']);
        this.spinner.hide();
      }, 3000);
  
      this.regService.create(formValue);
     }

      // stop here if form is invalid
  //     if (this. formRegister.invalid) {
  //         return alert("invalid input");
  //     }
  // // Initialize Params Object
 
  // let Params = new HttpParams();
  // // Begin assigning parameters
  // Params = Params.append('UserName', this.formRegister.value.UserName);
  // Params = Params.append('phoneNumber', this.formRegister.value.phoneNumber);
  // Params = Params.append('Email', this.formRegister.value.Email);
  // Params = Params.append('Password', this.formRegister.value.Password);
  // // Params = Params.append('confirmPassword', this.formRegister.value.confirmPassword);

  // Params = Params.append('Gender', this.formRegister.value.Gender);
  // Params = Params.append('LocationId', this.formRegister.value.LocationId=1);
  // Params = Params.append('Age', this.formRegister.value.Age);
  // Params = Params.append('RoleId', this.formRegister.value.RoleId=1);

  // return this.regService.create(Params);
  
  
  
  gotToLogin(){
    this.router.navigate(['Login'])

  }
  password(formGroup: FormGroup) {
    const password = formGroup.get('password');
    const  confirmPassword  = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
}
GoToLogin(){
  this.router.navigate(["Login"]);
}
GoToReg(){
  this.router.navigate(["Register"]);
}
GoToContact(){
  this.router.navigate(["Contact"]);

}
GoToAboutUs(){
  this.router.navigate(["AboutUs"]);
}
gotToRegister(){
  this.router.navigate(['Register'])
}
GoToHome(){
  this.router.navigate([''])

}
Home(){
  this.router.navigate([""]);

}
AboutUs(){
  this.router.navigate(["aboutUsHome"]);

}
ContactUs(){

  this.router.navigate(["contact"]);

  
}



GoToTestimonial(){
  this.router.navigate(["testimonial"]);
}

UserReg(){


//phoneNumber
//LocationId
//Age 

}

}

