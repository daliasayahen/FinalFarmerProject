import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ReviewService } from 'src/app/servics/review.service';
import { UsersService } from 'src/app/servics/users.service';

@Component({
  selector: 'app-review-home',
  templateUrl: './review-home.component.html',
  styleUrls: ['./review-home.component.css']
})
export class ReviewHomeComponent implements OnInit {

  constructor(private router:Router,private toast:ToastrService,
    private spiner:NgxSpinnerService, public reviewService:ReviewService) { }
  ngOnInit(): void {
    this.getallproducts();
    
  }
  getallproducts(){
    this.spiner.show();
    this.reviewService.getall().subscribe((res:any)=>{
      this.reviewService.data=res;
      this.spiner.hide();
      this.toast.success('Data Retrived');
  
    },err=>{
      this.spiner.hide();
      this.toast.error('something want worring');
    }
    )

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
    
  }
 

}
