import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'awesomeApp';
  checkBoxValue:boolean;
  constructor(){
    this.checkBoxValue=false;
  }
  changed(event: any){
    this.checkBoxValue=!this.checkBoxValue;
  }
}
