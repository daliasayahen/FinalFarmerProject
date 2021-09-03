import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../servics/auth.service';
import { ContactService } from '../servics/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ContactForm:FormGroup=new FormGroup({
    fullName:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    message:new FormControl('',[Validators.required]),
  })
  spinner: any;

  constructor(private router:Router,public contactService:ContactService) { }

  ngOnInit(): void {
  }
  GoToLogin(){
    this.router.navigate(["Login"]);
  }
  GoToReg(){
    this.router.navigate(["Register"]);
  }
  GoToContact(){
    this.router.navigate(["Contact"]);

  }
  GoToAboutUs(){
    this.router.navigate(["AboutUs"]);
  }
  gotToRegister(){
    this.router.navigate(['Register'])
  }
  GoToHome(){
    this.router.navigate([''])

  }
  submit(){
    debugger
    console.log(this.ContactForm.value);
    const formValue=this.ContactForm.value;
    formValue.fullName=this.ContactForm.value.fullName.toString();
    formValue.email=this.ContactForm.value.email;
    formValue.message=this.ContactForm.value.message.toString();

    setTimeout(() => {
        this.spinner.hide();
      }, 3000);
  
      this.contactService.create(formValue);

  }

  
  
}
