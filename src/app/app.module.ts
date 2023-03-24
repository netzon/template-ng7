import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainGridComponent } from "./components/main-grid/main-grid.component";
import { MainControlsComponent } from "./components/main-controls/main-controls.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, MainGridComponent, MainControlsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
