import { Component } from '@angular/core';
import { LugaresService } from './../services/lugares.service';
@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
  // styleUrls: ['./app.component.css']
})
export class LugaresComponent {
// title variable String Interpolation
title = 'appSquare Katherine';

lat=4.9630346;
lng=-73.9242993;
lugares= null;
constructor(private lugaresService:LugaresService){
  this.lugares = lugaresService.getLugares();
}

people:any = [
  {edad : 15, nombre:'andrea'},
  {edad : 42, nombre:'carlos'},
  {edad : 86, nombre:'agustina'},
  {edad : 17, nombre:'juan'},
  {edad : 25, nombre:'camilo'},
  {edad : 33, nombre:'luis'}
]
}
