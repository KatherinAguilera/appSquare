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
  lugares:any = [
    {active: false, nombre:'Florería la Gardenia'},
    {active: true, nombre:'Donas la pasadita'},
    {active: true, nombre:'Veterinaria Huellitas Felices'},
    {active: false, nombre:'Florería la Gardenia'},
    {active: true, nombre:'Donas la pasadita'},
    {active: true, nombre:'Veterinaria Huellitas Felices'}
  ];
  constructor(){
  }

}
