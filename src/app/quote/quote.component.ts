import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    { id: 1, name: 'You only live once.' },
    { id: 2, name: 'You cannot afford it unless you can buy it twice.' }, //Jay Z
    { id: 3, name: 'You Want A Love That Consumes You. You Want Passion And Adventure And Even A Little Danger.'}, //Damon Salvatore
    { id: 4, name: 'No problem can be solved from the same level of consciousness that created it.'}, //Einstein
    { id: 5, name: 'If you set your goals ridiculously high and it is a failure, you will fail above the success of everyone.'},
    { id: 6, name: 'The future belongs to those who believe in the beauty of their dreams.'}, //Eleanor Roosevelt
    { id: 7, name: 'Life is either a daring adventure or nothing at all.'}, //Helen Keller
    {id: 8, name: 'If life were predictable it would cease to be life and be without flavor.'}, //Eleanor Roosevelt
    {id: 9, name: 'Human progress has always been driven by a sense of adventure and unconventional thinking.'}, //Andre Geim
    {id: 10, name: 'We may sit in a library and yet be in all corners of the earth.'}, //John Lubbock
    {id: 11, name: 'Logic will get you from A to B. Imagination will take you everywhere.'},
  ];


  constructor() { }

  ngOnInit() {
  }

}
