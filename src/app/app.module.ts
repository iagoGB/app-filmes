import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IntroComponent } from './intro/intro.component';
import { HttpClientModule } from '@angular/common/http';
import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule, MatCardModule, MatGridListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ListagemFilmesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
