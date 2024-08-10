import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderHighlighter]' // attr selector
})
export class RenderHighlighterDirective {

  constructor(private renderer:Renderer2, private elementRef: ElementRef) { }
  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "aqua" )
  }
}
