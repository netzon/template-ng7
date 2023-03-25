import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from "@angular/core";

export interface IParticipant {
  img: string;
  name: string;
  currentActor?: boolean;
  screenSharing?: boolean;
}

export interface IGridDimension {
  width: number;
  height: number;
}

@Component({
  selector: "app-main-grid",
  templateUrl: "./main-grid.component.html",
  styleUrls: ["./main-grid.component.css"],
})
export class MainGridComponent implements OnInit {
  @Input() public participants: IParticipant[];

  @Output() public onGridResize: EventEmitter<IGridDimension> =
    new EventEmitter();

  constructor(private el: ElementRef) {}

  ngOnInit() {}

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    const elemRect: IGridDimension =
      this.el.nativeElement.getBoundingClientRect();

    this.onGridResize.emit({
      height: elemRect.height,
      width: elemRect.width,
    });
  }
}
