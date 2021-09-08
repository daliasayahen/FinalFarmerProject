import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ReviewService } from 'src/app/servics/review.service';

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

  constructor(private router:Router, private spinner: NgxSpinnerService , public reviewservic:ReviewService) { }

  ngOnInit(): void {
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

}
