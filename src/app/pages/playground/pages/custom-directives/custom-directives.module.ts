import { CustomDirectivesComponent } from './custom-directives.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomDirectivesRoutingModule } from './custom-directives-routing.module';
import { CustomDirectivesDirective } from './directives/custom-directives.directive';
import { CustomStructuralDirective } from './directives/custom-structural.directive';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    CustomDirectivesComponent,
    CustomDirectivesDirective,
    CustomStructuralDirective,
  ],
  imports: [
    CommonModule,
    CustomDirectivesRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [CustomDirectivesComponent],
})
export class CustomDirectivesModule {}
