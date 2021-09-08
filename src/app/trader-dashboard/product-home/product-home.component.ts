import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TraderDashService } from 'src/app/servics/trader-dash.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  constructor(private router:Router,private toast:ToastrService,
    private spiner:NgxSpinnerService, public traderDash:TraderDashService) { }
  ngOnInit(): void {
    this.getallproducts();
    
  }
  getallproducts(){
    this.spiner.show();
    this.traderDash.getallproducts().subscribe((res:any)=>{
      this.traderDash.data=res;
      this.spiner.hide();
      this.toast.success('Data Retrived');
  
    },err=>{
      this.spiner.hide();
      this.toast.error('something want worring');
    }
    )

  }
}
