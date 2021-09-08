import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trader',
  templateUrl: './trader.component.html',
  styleUrls: ['./trader.component.css']
})
export class TraderComponent implements OnInit {

  constructor(private router:Router,private toast:ToastrService ,
    private spiner :NgxSpinnerService)
   { 
  }
  ngOnInit(): void {
  }
  GetAllproducts(){
    this.router.navigate(['Traderdashboard/ProductHome'])

  }
  AddReview(){
    this.router.navigate(['Traderdashboard/AddReview'])
  }
  logout(){
    localStorage.clear();

    this.router.navigate(['/Login'])
    
  }

}
