import { Component, Input, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/servics/review.service';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent implements OnInit {

  @Input()reviewID:number|undefined
  @Input() userName:String|undefined
   @Input() descriptiontext:String|undefined
   @Input() img:any|undefined
   @Input() rate:number|undefined
  
  
    constructor(public reviewService:ReviewService) { }
  
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
        this.reviewService.uploadAttachment(formData);
        }​​​
  
  
}
