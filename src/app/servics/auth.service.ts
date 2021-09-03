import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 UserName=new FormControl('',[Validators.required]);
 phoneNumber= new FormControl('',[Validators.required]);
 Email=new FormControl('',[Validators.required,Validators.email]);
  Password=new FormControl('',[Validators.required,Validators.minLength(8)]);
  Gender=new FormControl('',[Validators.required]);
  Age=new FormControl('',[]);

  constructor(private spinner:NgxSpinnerService,private router:Router) { }
  checked: boolean=false;

  login(){
    console.log(this.Email.value);
    console.log(this.Password.value);
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
      //because the token will genarate if the user logged in , so I will take this token 

      const responce={
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImVzcmFhIiwicm9sZSI6ImFkbWluIiwibmJmIjoxNjMwNDk1ODgwLCJleHAiOjE2MzA0OTk0ODAsImlhdCI6MTYzMDQ5NTg4MH0.CIhhKIqCsvSEa92E3mrBZs2pskmB6gZJoijonhYwDmg"
      };
     //save the token to the local storge using setItem
      localStorage.setItem('token',responce.token);
      //decode the token to extract the role name from the token  
      const data:any=jwtDecode(responce.token);
      //save the decod on the local storge . but you must conver this data to string value using Json.stringify
      localStorage.setItem('user',JSON.stringify({...data,role:'admin'}));
      this.router.navigate(['client']);
    },3000)
  }

  

  RememberFun(){
    this.checked = true;
     localStorage.setItem('email', JSON.stringify(this.Email.value));
     localStorage.setItem('password', JSON.stringify(this.Password.value));
 
    //localStorage.getItem(this.email.value);
 
     console.log(localStorage);
     JSON.parse(localStorage.get('Email'));
     localStorage.getItem(this.Email.value);
     localStorage.getItem('password');
 
 
   }
 
}
