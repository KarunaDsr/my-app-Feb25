import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCapital]'
})
export class CapitalDirective {

  constructor(private elementRef:ElementRef) { }

  @HostListener('keyup')

  change(){
    this.elementRef.nativeElement.value=this.elementRef.nativeElement.value.toUpperCase();
  }

}
