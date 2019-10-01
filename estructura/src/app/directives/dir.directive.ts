import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDir]'
})
export class DirDirective {

  constructor(private refElement: ElementRef) {   }

  ngOnInit(): void {
    this.refElement.nativeElement.style.color = 'blue';
    this.refElement.nativeElement.innerText = 'blue';
  }

  @HostListener('click') canviText() {
    this.refElement.nativeElement.style.color = 'red';
  }
}
