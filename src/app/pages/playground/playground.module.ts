import { MatDividerModule } from "@angular/material/divider";
import { ButtonsRowModule } from "./../../components/buttons-row/buttons-row.module";
import { PlaygroundRoutingModule } from "./playground-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PlaygroundComponent } from "./playground.component";
import { CheckBoxComponent } from './pages/check-box/check-box.component';

@NgModule({
  declarations: [PlaygroundComponent, CheckBoxComponent],
  imports: [
    CommonModule,
    PlaygroundRoutingModule,
    ButtonsRowModule,
    MatDividerModule,
  ],
  exports: [PlaygroundComponent],
})
export class PlaygroundModule {}
