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
    {plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre:'Florería la Gardenia'},
    {plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Donas la pasadita'},
    {plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Veterinaria Huellitas Felices'},
    {plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre:'Sushi Suhiroll'},
    {plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre:'Hotel la Gracia'},
    {plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre:'Zapatería el Clavo'}
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
