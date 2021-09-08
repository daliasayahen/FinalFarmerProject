import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  selectedItem:any={};

  data:any[]=[];
  display_image:any;

  constructor(private http:HttpClient , private toaster:ToastrService ,private spiner:NgxSpinnerService ,private router:Router) { }
 
 
  getall(): Observable<any[]>{
    return this.http.get<any>('https://localhost:44379/api/Review');
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
    this.http.post('https://localhost:44379/api/Review',data,requestOptions).subscribe((res:any)=>{
    this.toaster.success('Created');
   // this.router.navigate([])login page 
    this.spiner.hide();
    },err=>{
      
      this.spiner.hide();
      this.toaster.error('Somthing want worning ');
    }
    
    )
  }
  getById(id:number){
    this.spiner.show();
    debugger
    this.http.get('https://localhost:44334/api/Review/'+id).subscribe((data:any)=>{
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

  DeleteItem(id:number){
    //from home service 
    this.spiner.show();
    this.http.delete(''+id).subscribe((data:any)=>{
      this.toaster.success('Deleted');
      this.spiner.hide();

    },err=>{
      this.spiner.hide();
    }
    );
    
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
    this.http.post("https://localhost:44379/api/products",file).subscribe((data: any) => {
    this.display_image=data.image;
    debugger
    if(data){
    console.log(data);}
    }, err => {
    })
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
      this.http.post('https://localhost:44379/api/Review',data,requestOptions).subscribe((res:any)=>{
      this.toaster.success('Created');
     // this.router.navigate([])login page 
      this.spiner.hide();
      alert("thanks for your message!")
      },err=>{
        
        this.spiner.hide();
        this.toaster.error('Somthing want worning ');
      }
      
      )
    }
}
