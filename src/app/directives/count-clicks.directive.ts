import {Directive, HostListener} from "@angular/core";
@Directive({
    selector: 'a[contar-clicks]'
})
export class ContarClicksDirective{
    clickN = 0;
    // cuando agregue una directiva al html escuche los eventeos de manera sencilla
    @HostListener('click', ['$event.target']) onClick(btn){
        console.log('a', btn, "Número de clicks:", this.clickN++);
    }
}