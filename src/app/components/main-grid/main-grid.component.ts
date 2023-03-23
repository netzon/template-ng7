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
    // console.log(event.target.innerWidth);
    // const height = event.target.innerHeight;
    // const width = event.target.innerWidth;

    // console.log(height, width);

    const elemRect: IGridDimension =
      this.el.nativeElement.getBoundingClientRect();

    // console.log(elemRect);
    this.onGridResize.emit({
      height: elemRect.height,
      width: elemRect.width,
    });
  }
}
