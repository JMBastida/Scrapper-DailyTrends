import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  Type,
  ViewChild
} from "@angular/core";
import { Subject } from "rxjs";
import { InsertionDirective } from "src/app/services/directives/insertion.directive";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements AfterViewInit, OnDestroy {
  public componentRef!: ComponentRef<any>;
  public childComponentType!: Type<any>;
  @ViewChild(InsertionDirective, {static: true})
  insertionPoint!: InsertionDirective;
  protected data = {};
  private readonly _onClose = new Subject<any>();
  public onClose = this._onClose.asObservable();

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  onOverlayClicked(evt: MouseEvent): void {
    this.close({});
  }

  onDialogClicked(evt: MouseEvent): void {
    // this one prevents modal closing when cliking over him
    evt.stopPropagation();
  }

  loadChildComponent(componentType: Type<any>): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentType
    );

    const viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  close(data: any): void {
    this._onClose.next(data);
  }
}
