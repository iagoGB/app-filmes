import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../models/movie.model';
import { HttpService } from '../services/filme/http.service';
import { MatDialog } from '@angular/material';
import { DetalhesFilmeComponent } from '../detalhes-filme/detalhes-filme.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { GenreResult } from '../models/result.model';

@Component({
  selector: 'app-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {
  private movies: Movie[];
  private genreResult: GenreResult = {
    results : null,
    total_pages : null,
    total_results : null,
    page : null
  }
  private base_image_url:string = "https://image.tmdb.org/t/p/";
  private image_size: string = "w500";
  private larguraAtual = 4;
  private page:number = 1;
  private generChoosed: number = 16;
  private highContrastTheme: boolean = false;
  

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

  ngOnDestroy(){
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
  // Consultar filmes mais bem votados - Carregamento inicial
  consultarFilmes(){
    this.httpService.getTopRated()
    .subscribe( 
      dados =>{
        this.genreResult.total_pages = dados.total_pages;
        this.genreResult.total_results = dados.total_results;
        this.genreResult.page = dados.page;
        this.movies = dados.results;
        console.log("Variável movie:" + this.movies);
      },
      erro =>
      { 
        console.log ("ERRO:"+erro);
      }
    );
  }
  // Método para avançar, retroceder ou atualizar para pagina desejada
  nextPage() {
    this.httpService.nextPage(this.page,this.generChoosed)
    .subscribe(
      dados => 
      {
        this.genreResult.total_pages= dados.total_pages;
        this.genreResult.total_results = dados.total_results;
        this.genreResult.page = dados.page;
        this.movies = dados.results;
        console.log(this.movies);
      }, 
      erro =>
      {
        console.log(erro);
      }
    );
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
  // Método para mudar os filmes que serão listados, recebendo o id de genero escolhido no seletor-genero componente
  changeGener(evento){
    this.genreResult = evento.genreResult;
    this.generChoosed = evento.choosed;
    this.nextPage();
    console.log(`Chegou novos genero: id: ${this.generChoosed} dados: ${ this.genreResult } `);
  }

  changeFind(movies){
    this.movies = movies;
    this.genreResult.total_pages = null;
  }

  changeTheme():void{
    this.highContrastTheme = !this.highContrastTheme;
    console.log("Executou a mudança de tema" + this.highContrastTheme);
  }
}
