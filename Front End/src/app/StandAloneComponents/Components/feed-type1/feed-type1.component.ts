import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feeds, Feed } from './feeds-data';


@Component({
  selector: 'app-feed-type1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feed-type1.component.html',
  styleUrls: ['./feed-type1.component.scss']
})
export class FeedType1Component implements OnInit {

  feeds: Feed[];

  constructor() {

    this.feeds = Feeds;
  }

  ngOnInit(): void {
  }

}
