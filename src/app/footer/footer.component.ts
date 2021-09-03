import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
currentYear:Date|any=undefined;
  constructor() {
    this.currentYear=new Date().getFullYear();//2021

   }
  ngOnInit(): void {
  }

}
