import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomepageService } from 'src/app/servics/homepage.service';
import { ProductServiceService } from 'src/app/servics/product-service.service';
import { UsersService } from 'src/app/servics/users.service';
import { CreateFarmerComponent } from '../create-farmer/create-farmer.component';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  constructor(private router:Router,private toast:ToastrService,
    private spiner:NgxSpinnerService, public userService:UsersService,private dialog:MatDialog) { }
  ngOnInit(): void {
    this.getallproducts();
    
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
  
 

createNewUser(){
  this.dialog.open(CreateFarmerComponent);


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
goHome(){
  
}
}
