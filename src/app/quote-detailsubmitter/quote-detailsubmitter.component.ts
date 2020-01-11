import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-detailsubmitter',
  templateUrl: './quote-detailsubmitter.component.html',
  styleUrls: ['./quote-detailsubmitter.component.css']
})
export class QuoteDetailsubmitterComponent implements OnInit {

  @Input() quote: Quote;

  constructor() { }

  ngOnInit() {
  }

}
