import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OddWordOutComponent } from './odd-word-out/odd-word-out.component';

// import * as PIXI from 'pixi.js'

//import { Sprite, Application, Rectangle, Texture, Container, DisplayObject, Text } from 'pixi.js';

@NgModule({
  declarations: [
    AppComponent,
    OddWordOutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
