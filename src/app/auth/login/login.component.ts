import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeComponent } from 'src/app/client/home/home.component';
import { AuthService } from 'src/app/servics/auth.service';
import { HomeService } from 'src/app/servics/home.service';
import { LoginServiceService } from 'src/app/servics/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
 
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  Showloader:boolean=false;
  constructor(private spinner: NgxSpinnerService,private router:Router,public LoginService:LoginServiceService, service:HomeService) { }
  ngOnInit(): void {
  }
  submit(){
   this.LoginService.login();
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
    this.router.navigate(['Home'])

  }
  RememberFun(){
    this.LoginService.RememberFun();
  }

  }


