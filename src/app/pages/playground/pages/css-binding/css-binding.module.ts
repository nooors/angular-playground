import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CssBindingComponent } from "./css-binding.component";
import { CssBindingRoutingModule } from "./css-binding-routing.module";

@NgModule({
  declarations: [CssBindingComponent],
  imports: [CommonModule, CssBindingRoutingModule],
})
export class CssBindingModule {}
