import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/servics/home.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, public homeService:HomeService,private toast:ToastrService , private spiner :NgxSpinnerService) { }
  updatevalue:number=0;

  ngOnInit(): void {
    this.alertActiveCourse();
    this .toast.success("Welcome to first toast ");
    
    this.getall();

    setInterval(()=>{
this.homeService.numberOfActiveCourse.next(this.homeService.numberOfActiveCourse.value+1)
  ,3000  })

  }

  goToProfile(){
      this.router.navigate(['Client/profile']);
  }
  alertActiveCourse(){
this.homeService.numberOfActiveCourse.subscribe((value)=>{
//  alert('The value is '+this.homeService.numberOfActiveCourse.value);
this.updatevalue=value;
})
  }
//show spineer
//api
//hide spiner

getall(){
  this.spiner.show();
  this.homeService.getall().subscribe((res:any)=>{
    this.homeService.data=res;
    this.spiner.hide();
    this.toast.success('Data Retrived');

  },err=>{
    this.spiner.hide();
    this.toast.error('something want worring');
  }
  )
}
}




