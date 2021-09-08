import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraderDashService {

  data:any[]=[];
  display_image:any;
  constructor(private http:HttpClient , private toaster:ToastrService ,private spiner:NgxSpinnerService ,private router:Router) { }
 
 
  getallproducts(): Observable<any[]>{
    return this.http.get<any>('https://localhost:44379/api/products');
  }
 
  

}
