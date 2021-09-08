import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {

  constructor(private router:Router,private toast:ToastrService ,
    private spiner :NgxSpinnerService) { }

  ngOnInit(): void {
  }
  GetAllproducts(){
    this.router.navigate(['dashboard/producthome'])
  }
  GetAllproductssoldout(){
    
  }
  addreviews(){

    this.router.navigate(['Farmerdashboard/Reviewform'])

  }
  logout(){
    localStorage.clear();

    this.router.navigate(['/Login'])

    
  }
}
