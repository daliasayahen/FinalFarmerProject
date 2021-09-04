import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestimonialService } from '../servics/testimonial.service';

@Component({
  selector: 'app-tistimonial',
  templateUrl: './tistimonial.component.html',
  styleUrls: ['./tistimonial.component.css']
})
export class TistimonialComponent implements OnInit {
@Input()TestimonialID:number|undefined
@Input() userName:String|undefined
 @Input() descriptiontext:String|undefined
 @Input() img:any|undefined

  constructor( public tistimonialService:TestimonialService ,private router:Router) { }

  ngOnInit(): void {
  }

  getImagePath(value:string ){

    let basePath="../../../assets/DBimages/Uploaded File/";
   return basePath+value;
   
    }

    uploadFile(files:any) {​​​
      if (files.length === 0) {​​​
      return;
      }​​​
      let fileToUpload = <File>files[0];
      const formData = new FormData();
      formData.append('file', fileToUpload, fileToUpload.name);
      this.tistimonialService.uploadAttachment(formData);
      }​​​
}
