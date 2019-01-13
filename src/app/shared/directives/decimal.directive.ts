import { Directive, Input, Inject, HostListener, OnChanges, ElementRef, Renderer, AfterViewInit, OnInit } from '@angular/core';
import { CurrencyPipePipe } from '../directives/currency-pipe.pipe';
@Directive({
  selector: '[adDecimal]'
})
export class DecimalDirective {

  private el: HTMLInputElement;

  constructor(el: ElementRef,
    private elementRef: ElementRef,
    private currencyPipe: CurrencyPipePipe

  ) {
  
    this.el = this.elementRef.nativeElement;

  }


  ngOnInit() {
  
    this.el.value = this.currencyPipe.parse(this.el.value);


  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    this.el.value = this.currencyPipe.parse(value); // opossite of transform
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    this.el.value = this.currencyPipe.parseOnBlur(value);
  }

  @HostListener("keyup", ["$event.target.value"])
  onKeyUp(value) {
   
    this.el.value = this.currencyPipe.parse(value);
  }

}
