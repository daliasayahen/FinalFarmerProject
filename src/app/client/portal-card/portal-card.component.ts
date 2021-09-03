import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/servics/home.service';

@Component({
  selector: 'app-portal-card',
  templateUrl: './portal-card.component.html',
  styleUrls: ['./portal-card.component.css']
})
export class PortalCardComponent implements OnInit {
@Input() testimonialID:number|undefined
@Input() userName:String|undefined
 @Input() descriptiontext:String|undefined
 @Input() img:String|undefined

@Output() goProfile=new EventEmitter;


  constructor(public homeService:HomeService ,private toaster:ToastrService) {  }

  ngOnInit(): void {
  }
  // showprofile(){
  //   this.goProfile.emit();

  //   this.homeService.selectedCourse={
  //     testimonialID:this.testimonialID,
  //     userName:this.userName,
  //     descriptiontext:this.descriptiontext,
  //     img:this.img,
        // description:this.description  

  //   }
      showprofile(){
        if(this.testimonialID){
          this.toaster.success('You are Welcome');
          debugger
          this.homeService.getById(this.testimonialID);
        }else{
          this.toaster.warning('This item connot be loded');
        }
        }

        DeleteItem(){
          //from portal.ts
          if(this.testimonialID){
            
            debugger
            this.homeService.DeleteItem(this.testimonialID);
            this.toaster.success('Deleted Item');
          }else{
            this.toaster.warning('This item connot be deleted');
          }
        }

     }
  
 
