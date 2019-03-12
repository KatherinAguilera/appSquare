import {Directive, OnInit, ElementRef, Renderer2, Input} from "@angular/core";
//typeScript
@Directive({
  // resaltar se usra en el html
    selector: '[resaltar]'
})
export class ResaltarDirective implements OnInit{
  // elementRef crear una referencia de html
    constructor(private elRef: ElementRef, private renderer: Renderer2){}
    @Input('resaltar') plan : string = '';
    ngOnInit(){
        if(this.plan === 'pagado'){
            this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightgray');
            this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
        }
    }
}