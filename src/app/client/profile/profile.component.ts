import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from 'src/app/servics/home.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentCourse:number=0;
  constructor(public homeService:HomeService) { }

  ngOnInit(): void {
   this.homeService.numberOfActiveCourse.subscribe(value=>{
     this.currentCourse=value;
   })
  }


}
