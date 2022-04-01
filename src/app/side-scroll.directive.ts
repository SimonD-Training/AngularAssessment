import { AfterViewInit, Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[SideScroll]'
})
export class SideScrollDirective implements AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    this.scrollArea.style.transition = "left 0.5s linear";
    this.scrollArea.style.left = "0px";
  }

  @Input() scrollArea!: HTMLDivElement;
  @HostListener('wheel', ['$event']) scroll(event: WheelEvent){
    let buffer = parseFloat(this.scrollArea.style.left.slice(0, this.scrollArea.style.left.length - 2));
    buffer+= event.deltaY / 2;
    buffer = buffer > 0 ? 0 : buffer;
    let maxScroll = this.scrollArea.scrollWidth - window.innerWidth + 370;
    buffer = buffer < (-1 * maxScroll ) ? (-1 * maxScroll) : buffer;
    let buffer2 = buffer.toString() + "px";
    this.scrollArea.style.left = buffer2;
  }

}
