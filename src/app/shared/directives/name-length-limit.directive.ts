import { AfterViewInit, Directive, ElementRef, Input, Optional, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tohNameLengthLimit]'
})
export class NameLengthLimitDirective implements AfterViewInit {

  @Input('tohNameLengthLimit') limit?: string;

  private DEFAULT_LIMIT = 10;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    const hostElement = this.elementRef.nativeElement;
    const buttonElement = hostElement.querySelector('button');
    const nameElement = hostElement.querySelector('.name');
    const label = nameElement.innerText;

    if (label.length > (this.limit || this.DEFAULT_LIMIT)) {
      this.renderer.addClass(buttonElement, 'long-name');
    } else {
      this.renderer.removeClass(buttonElement, 'long-name');
    }
  }

}
