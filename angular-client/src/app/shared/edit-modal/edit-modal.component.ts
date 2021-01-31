import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedsService } from 'src/app/services/api';
import { ModalComponent } from '../layout/modal/modal.component';
import { ModalConfig } from '../layout/modal/modal.injector';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent implements OnInit {
  constructor(
    private modalComponent: ModalComponent,
    private modalConfig: ModalConfig,
    private feedApiService: FeedsService,
    private formBuilder: FormBuilder
  ) {}

  form: FormGroup;
  ngOnInit(): void {
    console.log(this.modalConfig.data);

    this.form = this.formBuilder.group({
      title: [this.modalConfig.data['title'], Validators.required],
      body: [
        this.modalConfig.data['body'],
        [Validators.required, Validators.minLength(10)],
      ],
      publisher: [this.modalConfig.data['publisher'], [Validators.required]],
      image: this.modalConfig.data['image'],
      source: 'externo',
    });
  }

  async close(data: any): Promise<void> {
    if (this.modalConfig.data === '') {
      const response = await this.feedApiService
        .feedsControllerCreateFeed(this.form.value)
        .toPromise();
      console.log(response);
    } else {
      if (!this.modalConfig.data['_id']) {
        await this.feedApiService
          .feedsControllerCreateFeed(this.form.value)
          .toPromise();
      } else {
        await this.feedApiService
          .feedsControllerEditFeed(
            this.form.value,
            this.modalConfig.data['_id']
          )
          .toPromise();
      }
    }

    this.modalComponent.close(data);
    location.reload();
  }
}
