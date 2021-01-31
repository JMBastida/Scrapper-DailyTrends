import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { FeedDto, FeedsService } from '../services/api';
import { ModalService } from '../services/modal.service';
import { EditModalComponent } from '../shared/edit-modal/edit-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  feeds$: Observable<FeedDto[]>;

  constructor(
    private feedApiService: FeedsService,
    private modalService: ModalService
  ) {}

  async ngOnInit(): Promise<void> {
    this.feeds$ = this.feedApiService
      .feedsControllerFindFeeds()
      .pipe(shareReplay(1));
  }

  newFeed() {
    this.modalService.present(EditModalComponent, { data: '' });
  }
}
