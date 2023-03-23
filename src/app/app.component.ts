import { Component } from "@angular/core";
import { faker } from "@faker-js/faker";

import {
  IGridDimension,
  IParticipant,
} from "./components/main-grid/main-grid.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  participants: IParticipant[];
  participantsCount = 20;

  constructor() {
    this.participants = Array.from<IParticipant>({
      length: this.participantsCount,
    }).map(() => {
      return {
        img: "https://placehold.co/600x400?text=placeholder",
        name: faker.name.fullName(),
      };
    });
  }

  public onGridResize(e: IGridDimension) {
    console.log(e);
  }
}
