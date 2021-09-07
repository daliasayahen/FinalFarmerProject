import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/servics/users.service';
import { CreateTraderComponent } from '../create-trader/create-trader.component';

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
 

}