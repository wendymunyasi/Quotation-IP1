import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'You only live once.', 'Mae West', 'Sarah Matamoros', new Date(1956, 3, 14)),
    new Quote(2, 'You cannot afford it unless you can buy it twice.', 'Jay Z', 'Wendy Dev', new Date(2017, 6, 9)), //Jay Z
    new Quote(3, 'You want a love that consumes you. You want passion and adventure and even a little danger.', 'Damon Salvatore', 'Elijah Gilles', new Date(2011, 8, 20)), //Damon Salvatore
    new Quote(4, 'No problem can be solved from the same level of consciousness that created it.', 'Albert Einstein', 'Leonardo Di', new Date(2016, 3, 14)), //Einstein
    new Quote(5, 'If you set your goals ridiculously high and it is a failure, you will fail above the success of everyone.', 'James Cameroon', 'Margot Robbie', new Date(2015, 11, 26)),
    new Quote(6, 'The future belongs to those who believe in the beauty of their dreams.', 'Eleanor Roosevelt', 'Diana Michaels', new Date(2014, 12, 14)), //Eleanor Roosevelt
    new Quote(7, 'Life is either a daring adventure or nothing at all.', 'Helen Keller', 'Elizabeth Wanjiru', new Date(2013, 3, 14)), //Helen Keller
    new Quote(8, 'If life were predictable it would cease to be life and be without flavor.', 'Eleanor Roosevelt', 'Deli Ali', new Date(2012, 3, 14)), //Eleanor Roosevelt
    new Quote(9, 'Human progress has always been driven by a sense of adventure and unconventional thinking.', 'Andre Geim', 'Linda Nyaboke', new Date(2011, 3, 14)), //Andre Geim
    new Quote(10, 'We may sit in a library and yet be in all corners of the earth.', 'John Lubbock', 'Mr. Gold', new Date(2010, 3, 14)), //John Lubbock
    new Quote(11, 'Logic will get you from A to B. Imagination will take you everywhere.', 'Albert Einstein', 'Erwin Schrödinger', new Date(2009, 3, 14)),
  ];

  toggleDetails(index) {
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  toggleDetailsTwo(index) {
    this.quotes[index].showSubmitter = !this.quotes[index].showSubmitter;
  }

  toggleDetailsThree(index) {
    this.quotes[index].showCreatedDate = !this.quotes[index].showCreatedDate;
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.createdDate = new Date(quote.createdDate)
    this.quotes.push(quote)
  }

  toggleDetailsFour(index) {
    this.quotes[index].showName = !this.quotes[index].showName;
  }

  completeQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

