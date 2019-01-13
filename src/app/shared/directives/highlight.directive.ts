import { Directive,  ElementRef, HostListener, Input,OnInit } from '@angular/core';

@Directive({
  selector: '[adHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {

    el.nativeElement.style.backgroundColor = 'yellow';
   }

   ngOnInit() {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
     console.log("entro");
     
   }

}
