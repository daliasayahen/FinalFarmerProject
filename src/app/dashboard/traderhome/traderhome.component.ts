import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/servics/users.service';
import { CreateTraderComponent } from '../create-trader/create-trader.component';
import { UpdateTraderComponent } from '../update-trader/update-trader.component';

@Component({
  selector: 'app-traderhome',
  templateUrl: './traderhome.component.html',
  styleUrls: ['./traderhome.component.css']
})
export class TraderhomeComponent implements OnInit {

  @Input() UserID:number|undefined



  constructor(private router:Router,private toast:ToastrService,
    private spiner:NgxSpinnerService, public userService:UsersService,private dialog:MatDialog) { }
  ngOnInit(): void {
    this.getalltraders();
    
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
 
  goToHome(){
    this.router.navigate(['dashboard/admin'])


    
  }
  getalltraders(){
    this.spiner.show();
    this.userService.getalltraders().subscribe((res:any)=>{
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
    debugger
    this.dialog.open(CreateTraderComponent);
  }
  UpdateUser(){
    this.dialog.open(UpdateTraderComponent);

  }

 

}
