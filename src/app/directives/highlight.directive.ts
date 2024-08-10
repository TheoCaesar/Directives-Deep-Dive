import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    // selector:"highlight"  //invoke in template with square braces
    selector:"[highlight]" //attr selector - used in template sans []
})
export class HighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef){}

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'yellowgreen'
    }
}