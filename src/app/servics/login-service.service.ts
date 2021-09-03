import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  username=new FormControl('',[Validators.required]);
  password=new FormControl('',[Validators.required,Validators.minLength(8)]);

  checked: boolean=false;
constructor(private http:HttpClient , private toaster:ToastrService ,private spinner:NgxSpinnerService ,private router:Router) { }
 

//1
loginForm:FormGroup=new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)])
  })
  //


  create(data:any)
  {//this code to convert the data to json object , use the requestOptions after the data that sent .
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    this.spinner.show();
    debugger
    this.http.post('https://localhost:44379/api/jwt/auth',data,requestOptions).subscribe((res:any)=>{
    this.toaster.success('Created');
    this.spinner.hide();
    },err=>{
      
      this.spinner.hide();
      this.toaster.error('Somthing want worning ');
    }
    
    )
  }



  login(){
    console.log(this.username.value);
    console.log(this.password.value);
    //2
    const formValue=this.loginForm.value;
    formValue.username=this.loginForm.value.username.toString();
    formValue.password=this.loginForm.value.password;
    this.spinner.show();
    setTimeout(()=>{
      this.spinner.hide();
      const headerDict = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
      //because the token will genarate if the user logged in , so I will take this token 
      const requestOptions = {                                                                                                                                                                                 
        headers: new HttpHeaders(headerDict), 
      };
 //3
      var respose1=this.http.post('https://localhost:44379/api/jwt/auth',formValue,requestOptions).subscribe((res:any)=>{
  // this.toaster.success('Created');
  this.spinner.hide();
  })

      const responce={

        token:respose1.toString()
        // token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImVzcmFhIiwicm9sZSI6ImFkbWluIiwibmJmIjoxNjMwNTEzODYzLCJleHAiOjE2MzA1MTc0NjMsImlhdCI6MTYzMDUxMzg2M30.nhSQXdpajud2Mz-J-mijAfH1bbjkOFooQ3p65DjOABM"
      };
     //save the token to the local storge using setItem
      localStorage.setItem('token',responce.token);
      //decode the token to extract the role name from the token  
      const data:any=jwtDecode(responce.token);
      //save the decod on the local storge . but you must conver this data to string value using Json.stringify
      localStorage.setItem('user',JSON.stringify({...data}));
      if(data.role=="admin"){
      this.router.navigate(['admin/AdminHome']);
      }else if(data.role=="farmer")
      {

      }
      else if(data.role=="trader")
      {


      }
    },3000)
  }


  RememberFun(){
    this.checked = true;
     localStorage.setItem('username', JSON.stringify(this.username.value));
     localStorage.setItem('password', JSON.stringify(this.password.value));
 
    //localStorage.getItem(this.email.value);
 
     console.log(localStorage);
     JSON.parse(localStorage.get('username'));
     localStorage.getItem(this.username.value);
     localStorage.getItem('password');
 
 
   }
 
}


