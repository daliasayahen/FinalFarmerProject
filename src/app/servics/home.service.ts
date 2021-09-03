import { Injectable } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
message:string ="this message from home Services";

selectedCourse:any={};
numberOfActiveCourse=new BehaviorSubject(0);

data:any[]=[];
  constructor(private http:HttpClient , private toaster:ToastrService ,private spiner:NgxSpinnerService ,private router:Router) { }
 
 
  getall(): Observable<any[]>{
    return this.http.get<any>('https://localhost:44379/api/testimonial');
  }
  
  getById(id:number){
    this.spiner.show();
    debugger
    this.http.get('https://localhost:44334/api/Course/'+id).subscribe((data:any)=>{
      if(data){
        debugger
        this.selectedCourse=data;
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
    this.http.delete('https://localhost:44334/api/Course/delete/'+id).subscribe((data:any)=>{
      this.toaster.success('Deleted');
      this.spiner.hide();

    },err=>{
      this.spiner.hide();
    }
    );
    
  }
}
