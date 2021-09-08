import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReviewService } from 'src/app/servics/review.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  ContactForm:FormGroup=new FormGroup({
    
    userName:new FormControl('',[Validators.required]),
    descriptiontext:new FormControl('',[Validators.required]),
    img:new FormControl('',[Validators.required]),
    rate:new FormControl('',[Validators.required]),
  })
  spinner: any;

  constructor(private router:Router,public reviewService:ReviewService) { }

  ngOnInit(): void {
  }
  submit(){
    debugger
    console.log(this.ContactForm.value);
    const formValue=this.ContactForm.value;
  
    formValue.userName=this.ContactForm.value.userName.toString();
    formValue.descriptiontext=this.ContactForm.value.descriptiontext.toString();
    formValue.img=this.ContactForm.value.img.toString();
    formValue.rate=parseInt(this.ContactForm.value.rate);
  //parseInt(this.formRegister.value.age);

    setTimeout(() => {
        this.spinner.hide();
      }, 3000);
  
      this.reviewService.create(formValue);

  }

uploadFile(files:any) {​​​
if (files.length === 0) {​​​
return;
}​​​
let fileToUpload = <File>files[0];
const formData = new FormData();
formData.append('file', fileToUpload, fileToUpload.name);
this.reviewService.uploadAttachment(formData);
}​​​
}​​​



