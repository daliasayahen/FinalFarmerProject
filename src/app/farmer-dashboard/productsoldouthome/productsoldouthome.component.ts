import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/servics/users.service';

@Component({
  selector: 'app-productsoldouthome',
  templateUrl: './productsoldouthome.component.html',
  styleUrls: ['./productsoldouthome.component.css']
})
export class ProductsoldouthomeComponent implements OnInit {

  constructor(private router:Router,private toast:ToastrService ,
    private spiner :NgxSpinnerService , public userService:UsersService) { }

  ngOnInit(): void {
    this.getAllproductssoldout();
  }
  getAllproductssoldout(){
    this.spiner.show();
    this.userService.getAllproductssoldout().subscribe((res:any)=>{
      this.userService.data=res;
      this.spiner.hide();
      this.toast.success('Data Retrived');
  
    },err=>{
      this.spiner.hide();
      this.toast.error('something want worring');
    }
    )
  }

  GetAllproducts(){
    this.router.navigate(['Farmerdashboard/Farmerprodhome'])
  }
  GetAllproductssoldout(){
    this.router.navigate(['Farmerdashboard/Productsoldouthome'])
  }
  addreviews(){

    this.router.navigate(['Farmerdashboard/Reviewform'])

  }
  logout(){
    localStorage.clear();

    this.router.navigate(['/Login'])

    
  }


  gohome(){
    this.router.navigate(['HomePage'])
  }
}