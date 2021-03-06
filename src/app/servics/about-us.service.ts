import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {
  data:any[]=[];
  display_image:any;
  selectedItem:any;
  
  constructor(private http:HttpClient , private toaster:ToastrService ,private spiner:NgxSpinnerService ,private router:Router)
   {

   }

   getall(): Observable<any[]>{
    return this.http.get<any>('https://localhost:44379/api/AboutUs');
  }

  getById(id:number){
    this.spiner.show();
    debugger
    this.http.get('https://localhost:44379/api/AboutUs/delete/'+id).subscribe((data:any)=>{
      if(data){
        debugger
        this.selectedItem=data;
        this.router.navigate(['client/profile']);
      }
      this.spiner.hide();
    },err=>{
      this.spiner.hide();
      this.toaster.error('Something went worng ,please login again');
      this.router.navigate(['']);
    }
    
    )
  }

  create(data:any)
  {//this code to convert the data to json object , use the requestOptions after the data that sent .
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    this.spiner.show();
    debugger
    this.http.post('https://localhost:44379/api/AboutUs',data,requestOptions).subscribe((res:any)=>{
    this.toaster.success('Created');
   // this.router.navigate([])login page 
    this.spiner.hide();
    },err=>{
      
      this.spiner.hide();
      this.toaster.error('Somthing want worning ');
    }
    
    )
  }
  
  uploadAttachment(file:FormData){
    
    const headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    }
    const requestOptions = {
    headers: new HttpHeaders(headerDict),
    };
    debugger
    this.http.post("https://localhost:44379/api/AboutUs",file).subscribe((data: any) => {
    this.display_image=data.image;
    debugger
    if(data){
    console.log(data);}
    }, err => {
    })
    }
}
