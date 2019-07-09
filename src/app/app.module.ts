import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IntroComponent } from './intro/intro.component';
import { HttpClientModule } from '@angular/common/http';
import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatGridListModule, MatDialogModule, MatSelectModule, MatToolbarModule, MatInputModule, MatListModule, MatSidenavModule, MatMenuModule } from '@angular/material';
import { DetalhesFilmeComponent } from './detalhes-filme/detalhes-filme.component';
import { SeletorGeneroComponent } from './seletor-genero/seletor-genero.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { BuscarFilmeComponent } from './buscar-filme/buscar-filme.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ListagemFilmesComponent,
    DetalhesFilmeComponent,
    SeletorGeneroComponent,
    HeaderComponent,
    BuscarFilmeComponent
  ],
  entryComponents: [
    DetalhesFilmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    NgxPaginationModule,
    MatDialogModule,
    MatSelectModule,
    MatMenuModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
