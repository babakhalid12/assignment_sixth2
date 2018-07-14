import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(ele:ElementRef)
{

ele.nativeElement.style.backgroundColor='yellow';

}

}
