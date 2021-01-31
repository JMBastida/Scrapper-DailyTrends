import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../layout/modal/modal.component';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent implements OnInit {

  constructor(private modalComponent: ModalComponent) { }

  ngOnInit(): void {}

  close(data: any): void{
    this.modalComponent.close(data);
  }

}
