import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderHighlighter]' // attr selector
})
export class RenderHighlighterDirective {
  @HostBinding("style.backgroundColor") bgColor = "transparent"
  constructor(private renderer:Renderer2, private elementRef: ElementRef) { }
  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "aqua" )
  }
  @HostListener('mouseenter') onMouseOver(eventMetaData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "aqua" )
    this.bgColor = 'aqua';
  }

  @HostListener('mouseleave') onMouseLeave(eventMetaData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "white" )
    this.bgColor = 'transparent';
  }
}
