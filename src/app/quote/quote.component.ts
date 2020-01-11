import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'You only live once.', 'Mae West', 'Sarah Matamoros'),
    new Quote(2, 'You cannot afford it unless you can buy it twice.', 'Jay Z', 'Wendy Dev'), //Jay Z
    new Quote(3, 'You Want A Love That Consumes You. You Want Passion And Adventure And Even A Little Danger.', 'Damon Salvatore', 'Elijah Gilles'), //Damon Salvatore
    new Quote(4, 'No problem can be solved from the same level of consciousness that created it.', 'Albert Einstein', 'Leonardo Di'), //Einstein
    new Quote(5, 'If you set your goals ridiculously high and it is a failure, you will fail above the success of everyone.', 'James Cameroon', 'Margot Robbie'),
    new Quote(6, 'The future belongs to those who believe in the beauty of their dreams.', 'Eleanor Roosevelt', 'Diana Michaels'), //Eleanor Roosevelt
    new Quote(7, 'Life is either a daring adventure or nothing at all.', 'Helen Keller', 'Elizabeth Wanjiru'), //Helen Keller
    new Quote(8, 'If life were predictable it would cease to be life and be without flavor.', 'Eleanor Roosevelt', 'Deli Ali'), //Eleanor Roosevelt
    new Quote(9, 'Human progress has always been driven by a sense of adventure and unconventional thinking.', 'Andre Geim', 'Linda Nyaboke'), //Andre Geim
    new Quote(10, 'We may sit in a library and yet be in all corners of the earth.', 'John Lubbock', 'Mr. Gold'), //John Lubbock
    new Quote(11, 'Logic will get you from A to B. Imagination will take you everywhere.', 'Albert Einstein', 'Erwin Schrödinger '),
  ];


  constructor() { }

  ngOnInit() {
  }

}
