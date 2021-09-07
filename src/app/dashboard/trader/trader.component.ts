import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/servics/users.service';

@Component({
  selector: 'app-trader',
  templateUrl: './trader.component.html',
  styleUrls: ['./trader.component.css']
})
export class TraderComponent implements OnInit {

  @Input() userID:number|undefined
  @Input() userName:string|undefined
  @Input() phoneNumber:string|undefined
  @Input() email:string|undefined
  @Input() password:string|undefined
  @Input() address:string|undefined
  @Input() age:number|undefined
  @Input() roleId:number|undefined

  constructor(private router:Router,private toast:ToastrService ,
    private spiner :NgxSpinnerService,public userService:UsersService) { }


  ngOnInit(): void {
   // this.getall();
  }
  getall(){
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
  DeleteItem(id:any){
    if(this.userID){
      
      debugger
      this.userService.Deletetrader(id);
      this.toast.success('Deleted Item');
    }else{
      this.toast.warning('This item connot be deleted');
    }
  }

  }



