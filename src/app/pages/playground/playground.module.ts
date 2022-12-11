import { MatDividerModule } from "@angular/material/divider";
import { ButtonsRowModule } from "./../../components/buttons-row/buttons-row.module";
import { PlaygroundRoutingModule } from "./playground-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PlaygroundComponent } from "./playground.component";

@NgModule({
  declarations: [PlaygroundComponent],
  imports: [
    CommonModule,
    PlaygroundRoutingModule,
    ButtonsRowModule,
    MatDividerModule,
  ],
  exports: [PlaygroundComponent],
})
export class PlaygroundModule {}
