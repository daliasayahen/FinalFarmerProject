import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AboutUsService } from '../servics/about-us.service';

@Component({
  selector: 'app-about-us-home',
  templateUrl: './about-us-home.component.html',
  styleUrls: ['./about-us-home.component.css']
})
export class AboutUsHomeComponent implements OnInit {

  constructor(private http:HttpClient , private toaster:ToastrService ,private spiner:NgxSpinnerService ,private router:Router,public aboutusService:AboutUsService) { }

  ngOnInit(): void {
    this.getall();
  }
  getall(){
    this.spiner.show();
    this.aboutusService.getall().subscribe((res:any)=>{
      this.aboutusService.data=res;
      this.spiner.hide();
      this.toaster.success('Data Retrived');
  
    },err=>{
      this.spiner.hide();
      this.toaster.error('something want worring');
    }
    )
  }

}
