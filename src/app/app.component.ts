import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  name:string="dalia mahmoud";
  email:string="dalaia@gmail.com";
  salary:number=500;
  title = 'Day01Project';
  constructor(){

  }
  handleInput(ev:any){
 if(ev.length>15)
   alert("stop writing !!!");

  }
  clear(){
    this.name='';
    this.email='';
    this.salary=0;
  }
 
}
