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
  public products:any;
  data:any[]=[];
  display_image:any;
  cartProductList = [];

  
  constructor(private http:HttpClient , private toaster:ToastrService ,private spiner:NgxSpinnerService ,private router:Router) 
  {
    
  
} 

//cart crud

addToCart(payload:any)
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
    this.http.post('https://localhost:44379/api/Cart',payload,requestOptions).subscribe((res:any)=>{
    this.toaster.success('Created');
    this.spiner.hide();
    },err=>{
      
      this.spiner.hide();
      this.toaster.error('Somthing want worning ');
    }
    
    )
  }


getCartItems() {
  return this.http.get('https://localhost:44379/api/Cart');
}
increaseQty(payload:any) {
  return this.http.post('https://localhost:44379/api/Cart', payload);
}


emptyCart(id:number){
  debugger
  this.spiner.show();
  this.http.delete('https://localhost:44379/api/products/'+id).subscribe((data:any)=>{
    this.toaster.success('Deleted');
    this.spiner.hide();
  },err=>{
    this.spiner.hide();
  }
  );    
}
 
  getall(): Observable<any[]>{
    return this.http.get<any>('https://localhost:44379/api/products');
  }
  

  getAllproductssoldout(): Observable<any[]>{

    return this.http.get<any>('https://localhost:44379/api/products/ProductSoldOut');
    

  }
  getAllproductsByCategory(): Observable<any[]>{
    return this.http.get<any>('https://localhost:44379/api/category/GetAllCategoryProduct');
  }
  getAllfruitsProducts(): Observable<any[]>{
    return this.http.get<any>('https://localhost:44379/api/category/GetAllFruitCat');
  }
  getAllvegitablesProducts(): Observable<any[]>{
    return this.http.get<any>('https://localhost:44379/api/category/GetAllVegetableCat');
  }


 




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


  UpdateProduct(data:any)
  {//this code to convert the data to json object , use the requestOptions after the data that sent .
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    this.spiner.show();
    this.http.put('https://localhost:44379/api/products',data,requestOptions).subscribe((res:any)=>{
    this.toaster.success('Created');
    this.spiner.hide();
    },err=>{
      this.spiner.hide();
      this.toaster.error('Somthing want worning ');
    }
    
    )
  }
  

  DeleteProduct(id:number){
    debugger
    this.spiner.show();
    this.http.delete('https://localhost:44379/api/products/'+id).subscribe((data:any)=>{
      this.toaster.success('Deleted');
      this.spiner.hide();
    },err=>{
      this.spiner.hide();
    }
    );    
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
