import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  data:any[]=[];
  selectedItem:any;
  constructor(private http:HttpClient , private toaster:ToastrService ,private spiner:NgxSpinnerService ,private router:Router) { }
 
 
  getall(): Observable<any[]>{
    return this.http.get<any>('https://localhost:44379/api/Testimonial');
  }
  
  getById(id:number){
    this.spiner.show();
    debugger
    this.http.get('https://localhost:44379/api/Testimonial/delete/'+id).subscribe((data:any)=>{
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
    this.http.delete('https://localhost:44379/api/Testimonial/'+id).subscribe((data:any)=>{
      this.toaster.success('Deleted');
      this.spiner.hide();

    },err=>{
      this.spiner.hide();
    }
    );
    
  }

}
