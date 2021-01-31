import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditModalComponent } from './edit-modal/edit-modal.component';



@NgModule({
  declarations: [SuccessModalComponent, FeedCardComponent, EditModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:  [FeedCardComponent],
  entryComponents: [FeedCardComponent]
})
export class SharedModule { }
