import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModalComponent } from "./modal.component";
import { InsertionDirective } from "src/app/services/directives/insertion.directive";

@NgModule({
  imports: [CommonModule],
  declarations: [ModalComponent, InsertionDirective],
  entryComponents: [ModalComponent]
})
export class ModalModule {}
