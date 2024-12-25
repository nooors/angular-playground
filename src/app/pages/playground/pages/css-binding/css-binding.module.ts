import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssBindingComponent } from './css-binding.component';
import { CssBindingRoutingModule } from './css-binding-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CssBindingComponent],
  imports: [CommonModule, CssBindingRoutingModule, MatButtonModule],
})
export class CssBindingModule {}
