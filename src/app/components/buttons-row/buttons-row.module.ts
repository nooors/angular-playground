import { ButtonsRowComponent } from "./buttons-row.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ButtonsRowComponent],
  imports: [CommonModule],
  exports: [ButtonsRowComponent, CommonModule],
})
export class ButtonsRowModule {}
