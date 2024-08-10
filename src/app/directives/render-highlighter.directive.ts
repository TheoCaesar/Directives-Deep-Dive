import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderHighlighter]' // attr selector
})
export class RenderHighlighterDirective {
  @Input() defaultColour : string;
  @Input('appRenderHighlighter') hoverColour : string;

  // @HostBinding("style.backgroundColor") bgColor = "transparent"
  @HostBinding("style.backgroundColor") bgColor;

  constructor(private renderer:Renderer2, private elementRef: ElementRef) { }
  ngOnInit() {
    this.bgColor = this.defaultColour;
  }

  @HostListener('mouseenter') onMouseOver(eventMetaData: Event){
    // this.bgColor = 'aqua';
    this.bgColor = this.hoverColour;
  }

  @HostListener('mouseleave') onMouseLeave(eventMetaData: Event){
    this.bgColor = this.defaultColour;
    // this.bgColor = 'transparent';
  }
}
