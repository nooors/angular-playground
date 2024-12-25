import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirectives]',
})
export class CustomDirectivesDirective {
  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.background = 'red';
  }
}
