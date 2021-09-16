import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ProductComponent } from '../product/product.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  data:any[]=[];
  display_image:any;
  cartProductList = [];

  
  constructor(private http:HttpClient , private toaster:ToastrService ,private spiner:NgxSpinnerService ,private router:Router) 
  {
    
  
} 


Book(val: any) {
  return this.http.post('https://localhost:44379/api/Cart/order', val);
}

confirm(val: any) {
  return this.http.post('https://localhost:44379/api/Cart/confirm', val);
}




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
 
getCartItems(): Observable<any[]>{
    return this.http.get<any>('https://localhost:44379/api/products');
  }
 

  getUserCart(): Observable<any[]>{
    return this.http.get<any>('https://localhost:44379/api/cart/pay');
  }
  }
