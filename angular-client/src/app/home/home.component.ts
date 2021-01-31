import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from "rxjs/operators";
import { FeedDto, FeedsService } from '../services/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  feeds$: Observable<FeedDto[]>;

  constructor(private feedApiService: FeedsService) {}

  async ngOnInit(): Promise<void> {
    this.feeds$ = this.feedApiService
      .feedsControllerFindFeeds()
      .pipe(shareReplay(1));
  }
}
