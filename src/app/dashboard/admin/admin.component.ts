import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/servics/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router,private toast:ToastrService ,
    private spiner :NgxSpinnerService)
   { 
  }

  ngOnInit(): void {
  
  }
  GetAllFarmers(){
    this.router.navigate(['dashboard/farmerhome'])

  }
  GetAlltraders(){
    this.router.navigate(['dashboard/traderhome'])

  }
  GetAllproducts(){
    this.router.navigate(['dashboard/producthome'])

  }
  GetAllreviews(){
    this.router.navigate(['dashboard/reviewHome'])

  }
  logout(){
    localStorage.clear();

    this.router.navigate(['/Login'])

  }


  

}
