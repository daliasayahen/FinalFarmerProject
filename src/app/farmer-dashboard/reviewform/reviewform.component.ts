import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ReviewService } from 'src/app/servics/review.service';
import { UsersService } from 'src/app/servics/users.service';


@Component({
  selector: 'app-reviewform',
  templateUrl: './reviewform.component.html',
  styleUrls: ['./reviewform.component.css']
})
export class ReviewformComponent implements OnInit {
  
  
  formReview:FormGroup=new FormGroup({
    
    userName:new FormControl('',[Validators.required]),
    descriptiontext:new FormControl('',[Validators.required]),
    img:new FormControl('',[Validators.required]),
    rate:new FormControl('',[Validators.required]),

  
  }
  )
   
  // isRated=false;
  // changeRating(){
  //  this.isRated=!this.isRated
  // }

  constructor(private router:Router, private spinner: NgxSpinnerService ,
     public reviewservic:ReviewService, public userService:UsersService) { }

    
  ngOnInit(): void {
    
    
  }
  GetAllproducts(){
    this.router.navigate(['dashboard/producthome'])
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




  submit() {
    debugger
    console.log(this.formReview.value);
    const formValue=this.formReview.value;
    formValue.userName=this.formReview.value.userName.toString();
    formValue.descriptiontext=this.formReview.value.descriptiontext.toString();
    formValue.img=this.formReview.value.img.toString();
    formValue.rate=parseInt(this.formReview.value.rate);
  //parseInt(this.formRegister.value.age);

    setTimeout(() => {
      //  this.router.navigate(['Login']);
        this.spinner.hide();
      }, 3000);
  
      this.reviewservic.create(formValue);
     }



     uploadFile(files:any) {​​​
      if (files.length === 0) {​​​
      return;
      }​​​
      let fileToUpload = <File>files[0];
      const formData = new FormData();
      formData.append('file', fileToUpload, fileToUpload.name);
      this.reviewservic.uploadAttachment(formData);
      }​​​
    
} 

