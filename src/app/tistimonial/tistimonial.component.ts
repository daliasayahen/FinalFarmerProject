import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tistimonial',
  templateUrl: './tistimonial.component.html',
  styleUrls: ['./tistimonial.component.css']
})
export class TistimonialComponent implements OnInit {
@Input()TestimonialID:number|undefined
@Input() userName:String|undefined
 @Input() descriptiontext:String|undefined
 @Input() img:String|undefined

  constructor() { }

  ngOnInit(): void {
  }

}
