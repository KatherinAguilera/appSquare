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
  // title variable
  title = 'appSquare Katherine';
  a=2;
  b=8;
}
