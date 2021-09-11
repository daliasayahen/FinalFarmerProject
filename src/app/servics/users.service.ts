import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  data:any[]=[];
  display_image:any;
  constructor(private http:HttpClient , private toaster:ToastrService ,private spiner:NgxSpinnerService ,private router:Router) { }
 
 
  getallfarmers(): Observable<any[]>{
    return this.http.get<any>('https://localhost:44379/api/users/allfarmers');
  }

  getalltraders(): Observable<any[]>{
    return this.http.get<any>('https://localhost:44379/api/users/alltraders');
  }
  getallproducts(): Observable<any[]>{
    return this.http.get<any>('https://localhost:44379/api/products');
  }
  getallReview(): Observable<any[]>{
    return this.http.get<any>('https://localhost:44379/api/review');
  }



  Deletefarmer(id:number){
    //from home service 
    debugger
    this.spiner.show();
    this.http.delete('https://localhost:44379/api/users/'+id).subscribe((data:any)=>{
      this.toaster.success('Deleted');
      this.spiner.hide();
    },err=>{
      this.spiner.hide();
    }
    );    
  }
  Deletetrader(id:number){
    //from home service 
    this.spiner.show();
    this.http.delete('https://localhost:44379/api/users/'+id).subscribe((data:any)=>{
      this.toaster.success('Deleted');
      this.spiner.hide();
    },err=>{
      this.spiner.hide();
    }
    );    
  }
  createUser(data:any)
  {//this code to convert the data to json object , use the requestOptions after the data that sent .
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    this.spiner.show();
    this.http.post('https://localhost:44379/api/users/register',data,requestOptions).subscribe((res:any)=>{
    this.toaster.success('Created');
    this.spiner.hide();
    },err=>{
      this.spiner.hide();
      this.toaster.error('Somthing want worning ');
    }
    
    )
  }
  
  UpdateUser(data:any)
  {//this code to convert the data to json object , use the requestOptions after the data that sent .
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    this.spiner.show();
    this.http.post('https://localhost:44379/api/users',data,requestOptions).subscribe((res:any)=>{
    this.toaster.success('Created');
    this.spiner.hide();
    },err=>{
      this.spiner.hide();
      this.toaster.error('Somthing want worning ');
    }
    
    )
  }
  
  
}

