import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IntroComponent } from './intro/intro.component';
import { HttpClientModule } from '@angular/common/http';
import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule, MatCardModule, MatGridListModule, MatDialogModule, MatSelectModule } from '@angular/material';
import { DetalhesFilmeComponent } from './detalhes-filme/detalhes-filme.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ListagemFilmesComponent,
    DetalhesFilmeComponent,
    
  ],
  entryComponents: [
    DetalhesFilmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
