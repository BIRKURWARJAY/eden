import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBorderclr]'
})
export class BorderclrDirective {

  @Input() set appBorderclr(condition: string) {
    if (condition == "red" || condition == 'dupname') {
      this.renderer.setStyle(this.el.nativeElement, 'border-color', 'red');
    } else if (condition == "green") {
      this.renderer.setStyle(this.el.nativeElement, 'border-color', 'green');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'border-color', 'gray')
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

}
