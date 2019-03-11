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
  nombre = '';
  apellido = '';
// se ejecutara al cargar la clase
  constructor(){
    setTimeout(() => {
      this.listo = true;
    }, 3000)
  }
  // Event Binding
clickeado = 0;
  click() {
  this.clickeado += 1;
  }
}
