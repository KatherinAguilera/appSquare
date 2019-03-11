import { Component } from '@angular/core';
// componente
@Component({
  // iniciar html
  selector: 'app-root',
  // cada component.ts usara un component.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title variable String Interpolation
  title = 'appSquare Katherine';
  a=2;
  b=8;
  // Property Binding
  listo = false;
  nombre:string = '';
// se ejecutara al cargar la clase
  constructor(){
    setTimeout(() => {
      this.listo = true;
    }, 3000)
  }
}
