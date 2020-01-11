import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    { id: 1, name: 'You only live once' },
    { id: 2, name: 'You cannot afford it unless you can buy it twice' },
  ];


  constructor() { }

  ngOnInit() {
  }

}
