import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {

  @Input() testName: string;
  NumberOfUpvotes: number = 0;

  UpvoteButtonClick() {
    this.NumberOfUpvotes++;
  }

  constructor() { }

  ngOnInit() {
  }

}
