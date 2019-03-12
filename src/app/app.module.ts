import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/count-clicks.directive';

// palabra reservada para declarar un modulo en angular
@NgModule({
  declarations: [
    // html
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective
  ],
  imports: [
  // modulos como http Forms
    BrowserModule,
      FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB0wH2jljHrrC-KJdo-h3xd7ti4fTWoaF4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
