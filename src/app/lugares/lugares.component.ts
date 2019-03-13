import { Component } from '@angular/core';
@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
  // styleUrls: ['./app.component.css']
})
export class LugaresComponent {
// title variable String Interpolation
title = 'appSquare Katherine';
lugares:any = [
  {id:1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre:'Florería la Gardenia'},
  {id:2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre:'Donas la pasadita'},
  {id:3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre:'Veterinaria Huellitas Felices'},
  {id:4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre:'Sushi Suhiroll'},
  {id:5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre:'Hotel la Gracia'},
  {id:6, plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre:'Zapatería el Clavo'}
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
