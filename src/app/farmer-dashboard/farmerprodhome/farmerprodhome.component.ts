import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProductServiceService } from 'src/app/servics/product-service.service';
import { UsersService } from 'src/app/servics/users.service';
import { CreatproductfarmerComponent } from '../creatproductfarmer/creatproductfarmer.component';

@Component({
  selector: 'app-farmerprodhome',
  templateUrl: './farmerprodhome.component.html',
  styleUrls: ['./farmerprodhome.component.css']
})
export class FarmerprodhomeComponent implements OnInit {

  @Input() ProductID:number|undefined



  constructor(private router:Router,private toast:ToastrService,
    private spiner:NgxSpinnerService, public userService:UsersService,private dialog:MatDialog,public productsservics:ProductServiceService) { }
  ngOnInit(): void {
    this.getallproducts();
    
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

  getallproducts(){
    this.spiner.show();
    this.userService.getallproducts().subscribe((res:any)=>{
      this.userService.data=res;
      this.spiner.hide();
      this.toast.success('Data Retrived');
  
    },err=>{
      this.spiner.hide();
      this.toast.error('something want worring');
    }
    )

  }
  createNewproduct(){
    debugger
    this.dialog.open(CreatproductfarmerComponent);
  }
 







}
