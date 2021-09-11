import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  data:any[]=[];
  display_image:any;
  constructor(private http:HttpClient , private toaster:ToastrService ,private spiner:NgxSpinnerService ,private router:Router) { }
 
 
  getall(): Observable<any[]>{
    return this.http.get<any>('https://localhost:44379/api/products');
  }

  getAllproductssoldout(): Observable<any[]>{
<<<<<<< HEAD
    return this.http.get<any>('https://localhost:44379/api/Products/ProductsSoldOut');
  }
  getAllproductsByCategory(): Observable<any[]>{
    return this.http.get<any>('https://localhost:44379/api/category/GetAllCategoryProduct');
  }

=======
    return this.http.get<any>('https://localhost:44379/api/Products/ProductSoldOut"');
  }


>>>>>>> b853a4bb4ea19bc570be77acbeda1ffd21f1b78d
  create(data:any)
  {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    this.spiner.show();
    debugger
    this.http.post('https://localhost:44379/api/products',data,requestOptions).subscribe((res:any)=>{
    this.toaster.success('Created');
    this.spiner.hide();
    },err=>{
      
      this.spiner.hide();
      this.toaster.error('Somthing want worning ');
    }
    
    )
  }

  DeleteItem(id:number){
    this.spiner.show();
    this.http.delete('https://localhost:44334/api/products/delete/'+id).subscribe((data:any)=>{
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
}
