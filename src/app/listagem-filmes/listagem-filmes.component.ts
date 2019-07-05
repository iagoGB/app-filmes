import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../models/movie.model';
import { HttpService } from '../services/http.service';
import { MatDialog } from '@angular/material';
import { DetalhesFilmeComponent } from '../detalhes-filme/detalhes-filme.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {
  private movies: Movie[];
  private base_image_url:string = "https://image.tmdb.org/t/p/";
  private image_size: string = "w500";
  private larguraAtual = 4;
  private p:number = 1;
  private totalPages: number;
  private totalResults: number;

  constructor( 
    private httpService:HttpService,
    private dialog:MatDialog,
    private breakpointObserver:BreakpointObserver,
    private liveAnnouncer:LiveAnnouncer
  ) { }

  ngOnInit(){
    this.consultarFilmes();
    this.watchScreen();
    this.liveAnnouncer.announce("Escolha o filme desejado!");
  }
  // Método para verificar tamanho da tela
  watchScreen():void{
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium
    ]).subscribe(result => {
      if (result.matches) {
        this.larguraAtual = 2;
      } else {
        this.larguraAtual = 4;
      }
    });
  }
  // Consultar filmes mais bem votados
  consultarFilmes(){
     return this.httpService.getTopRated()
    .subscribe( 
      dados =>{
        this.movies = dados.results;
        this.totalPages = dados.total_pages;
        this.totalResults = dados.total_results;
        console.log("Variável movie:" + this.movies);
      },
      error =>{ 
        console.log (error);
      }
    );
  }

  nextPage(): void {
    this.httpService.nextPage(this.p).subscribe(
      dados => {
        this.movies = dados.results;
      }
    )
  }
  // Método para carregar as imagens dos filmes
  getImage(file_path: string ): string {
    return this.httpService.getImage(file_path);
  }
  // Método para abrir pop-up com detalhes do filme
  openDialog(movieId:number): void {
    const dialogRef = this.dialog.open( DetalhesFilmeComponent, {
      width: '600px',
      data: { id: movieId }
    });
    dialogRef.afterClosed().subscribe ( action =>
      console.log("Fechou")
    )
  }
  // Método para mudar os filmes que serão listados, recebendo o array de novos filmes a serem listados por genero
  change(evento){
    this.movies = evento;
    console.log(`Mudou por gênero ${ this.movies }`);
  }
}
