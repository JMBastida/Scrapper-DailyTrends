import { Component, Input, OnInit } from '@angular/core';
import { FeedDto, FeedsService } from 'src/app/services/api';
import { ModalService } from 'src/app/services/modal.service';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Component({
  selector: 'feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss'],
})
export class FeedCardComponent implements OnInit {
  @Input() new: FeedDto;
  constructor(
    private modalService: ModalService,
    private feedService: FeedsService
  ) {}

  ngOnInit(): void {}

  async deleteFeed() {
    await this.feedService
      .feedsControllerRemoveFeed(this.new['_id'])
      .toPromise();
    location.reload();
  }

  editFeed() {
    this.modalService.present(EditModalComponent, { data: this.new });
  }
}
