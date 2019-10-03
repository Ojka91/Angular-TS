import { Directive, ElementRef, HostListener } from '@angular/core';
import { ServeiService } from '../services/servei.service';

@Directive({
  selector: '[cocheStyle]'
})
export class DirDirective {

  constructor(private refElement: ElementRef) {   }


  ngOnInit(): void {

    this.refElement.nativeElement.style.color = 'blue';
    this.refElement.nativeElement.innerText = 'blue';
  }


  @HostListener('mouseenter') onMouseOver() {
    this.refElement.nativeElement.style.zIndex = '1';
    this.refElement.nativeElement.style.width = '300px';
    this.refElement.nativeElement.style.position = 'absolute';
    this.refElement.nativeElement.style.border = '1px solid black';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.refElement.nativeElement.style = null ;
  }
}
