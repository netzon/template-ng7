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
  participants: IParticipant[] = [];
  participantsCount = 0;

  showConfig = true;

  // private _participantsToRender: IParticipant[] = [];
  // public get participantsToRender(): IParticipant[] {
  //   return this._participantsToRender;
  // }

  // public set participantsToRender(p: IParticipant[]) {
  //   this._participantsToRender = p;
  // }

  participantsToRender: IParticipant[] = [];
  pageGroups: IParticipant[][] = [];
  currentPageIndex = 0;
  // maxPageIndex = 0;
  maxCountPerPage = 20;

  constructor() {}

  public setSampleParticipants() {
    this.participants = Array.from<IParticipant>({
      length: this.participantsCount,
    }).map(() => {
      return {
        img: "https://placehold.co/600x400?text=placeholder",
        name: faker.name.fullName(),
        currentActor: false,
        screenSharing: false,
      };
    });

    this.prepareParticipantsToRender();
  }

  public prepareParticipantsToRender() {
    if (this.participantsCount > this.maxCountPerPage) {
      // const array = new Array(50).fill(0).map((_, i) => i + 1); // create an array of 50 items
      // const groups = [];
      for (let i = 0; i < this.participants.length; i += 20) {
        this.pageGroups.push(this.participants.slice(i, i + 20));
      }

      // this.maxPageIndex = this.pageGroups.length - 1;
      this.participantsToRender = this.pageGroups[this.currentPageIndex];
    } else {
      // this.maxPageIndex = 0;
      this.participantsToRender = this.participants;
    }
  }

  public onGridResize(e: IGridDimension) {
    console.log(e);
  }

  public toggleConfig() {
    this.showConfig = !this.showConfig;
  }

  public clickCurrentActor(id: number) {
    this.participants = this.participants.map((p, index) => {
      const participant = { ...p };

      if (index === id) {
        participant.currentActor = true;
      } else {
        participant.currentActor = false;
      }

      return participant;
    });
  }

  public clickScreenShare(id: number) {
    this.participants = this.participants.map((p, index) => {
      const participant = { ...p };

      if (index === id) {
        participant.screenSharing = true;
      } else {
        participant.screenSharing = false;
      }

      return participant;
    });
  }

  public onClickLeft() {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex -= 1;
      this.participantsToRender = this.pageGroups[this.currentPageIndex];
    }
  }

  public onClickRight() {
    if (this.currentPageIndex < this.pageGroups.length - 1) {
      this.currentPageIndex += 1;
      this.participantsToRender = this.pageGroups[this.currentPageIndex];
    }
  }
}
