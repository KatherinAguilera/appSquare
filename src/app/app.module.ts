import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// palabra reservada para declarar un modulo en angular
@NgModule({
  declarations: [
    // html
    AppComponent
  ],
  imports: [
    // modulos como http Forms
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
