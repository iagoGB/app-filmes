import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';

const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'home', component: ListagemFilmesComponent},
  { path: ' ', redirectTo: 'intro', pathMatch: 'full'},
  { path: '**', redirectTo: 'intro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
