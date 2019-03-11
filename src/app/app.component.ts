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
    {nombre:'Florería la Gardenia'},
    {nombre:'Donas la pasadita'},
    {nombre:'Veterinaria Huellitas Felices'},
    {nombre:'Florería la Gardenia'},
    {nombre:'Donas la pasadita'},
    {nombre:'Veterinaria Huellitas Felices'}
  ];
  constructor(){
  }

}
