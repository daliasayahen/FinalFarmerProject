import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/servics/users.service';
import { CreateFarmerComponent } from '../create-farmer/create-farmer.component';

@Component({
  selector: 'app-farmer-home',
  templateUrl: './farmer-home.component.html',
  styleUrls: ['./farmer-home.component.css']
})
export class FarmerHomeComponent implements OnInit {

  constructor(private router:Router,private toast:ToastrService,
    private spiner:NgxSpinnerService, public userService:UsersService,private dialog:MatDialog) { }
  ngOnInit(): void {
    this.getallfarmers();
    
  }
  getallfarmers(){
    this.spiner.show();
    this.userService.getallfarmers().subscribe((res:any)=>{
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
  UpdateUser(){

  }
  goHome(){
    
  }

 

}
