import { Component, Input, OnInit } from '@angular/core';
import { FeedDto } from 'src/app/services/api';

@Component({
  selector: 'feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent implements OnInit {
  @Input() new: FeedDto;
  constructor() { }

  ngOnInit(): void {
  }

}
