import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotation';

  quotes: Quote[] = [
    { id: 1, name: 'You only live once' },
    { id: 2, name: 'You cannot afford it unless you can buy it twice' },
  ];

  constructor() {

  }

}
