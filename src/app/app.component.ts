import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotation';

  quotes:string[];

  constructor() {
    this.quotes =['You only live once', 'You cannot afford it unless you can buy it twice']
  }
  
}
