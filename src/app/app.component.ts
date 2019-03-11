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
  lat=4.9630346;
  lng=-73.9242993;

  people:any = [
    {edad : 15, nombre:'andrea'},
    {edad : 42, nombre:'carlos'},
    {edad : 86, nombre:'agustina'},
    {edad : 17, nombre:'juan'},
    {edad : 25, nombre:'camilo'},
    {edad : 33, nombre:'luis'}
  ]
  constructor(){
  }

}
