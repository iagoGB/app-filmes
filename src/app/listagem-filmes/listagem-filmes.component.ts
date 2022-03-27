import { Component, OnInit, Input, OnDestroy, HostListener } from '@angular/core';
import { Movie } from '../models/movie.model';
import { HttpService } from '../services/filme/http.service';
import { MatDialog } from '@angular/material';
import { DetalhesFilmeComponent } from '../detalhes-filme/detalhes-filme.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Result } from '../models/result.model';


@Component({
  selector: 'app-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit,OnDestroy {
  base_image_url: string = "https://image.tmdb.org/t/p/";
  image_size: string = "w500";
  hangeFont: boolean = false;
  highContrastTheme: boolean = false;
  larguraAtual: number = 4;
  page: number = 1;
  generChoosed: number = 16;
  fontSize: number = 16;
  paginationPrevious: string = "";
  paginationNext: string = ""; 
  movies: Movie[];
  result: Result = {
    results : null,
    total_pages : null,
    total_results : null,
    page : null
  };
  
  constructor( 
    private httpService: HttpService,
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    private liveAnnouncer: LiveAnnouncer
  ) { }

  ngOnInit() {
    this.consultarFilmes();
    this.onResize();
    this.liveAnnouncer.announce("Escolha o filme desejado!");
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    const currentWidth = window.innerWidth;
    if(currentWidth >=1200) {
      this.larguraAtual = 4;
      this.image_size = "w300";
      this.paginationPrevious = "Anterior";
      this.paginationNext = "Próximo";
    } else if (currentWidth >= 992) {
      this.larguraAtual = 3;
    } else if (currentWidth >=576) {
      this.larguraAtual = 2;
    } else {
      this.larguraAtual = 1;
      this.image_size = "w185";
      this.paginationPrevious ="";
      this.paginationNext = "";
    }
  }

  ngOnDestroy() {
  }

  // Método para verificar tamanho da tela
  watchScreen(): void {
    // this.breakpointObserver.observe([
    //   Breakpoints.XSmall,
    // ]).subscribe(result => {
    //   if (result.matches) {
    //     this.larguraAtual = 1;
    //     this.image_size = "w185";
    //     this.paginationPrevious ="";
    //     this.paginationNext = "";
    //   } else {
    //     this.larguraAtual = 3;
    //     this.image_size = "w300";
    //     this.paginationPrevious = "Anterior";
    //     this.paginationNext = "Próximo";
    //   }
    // });
    // this.breakpointObserver.observe([
    //   Breakpoints.Small,
    // ]).subscribe(result => {
    //   if (result.matches) this.larguraAtual = 2;
    // });
  }
  // Consultar filmes mais bem votados - Carregamento inicial
  consultarFilmes() {
    this.httpService.getTopRated()
    .subscribe( 
      dados =>{
        this.result.total_pages = dados.total_pages;
        this.result.total_results = dados.total_results;
        this.result.page = dados.page;
        this.movies = dados.results;
      },
      erro =>  {}
    );
  }
  // Método para avançar, retroceder ou atualizar para pagina desejada
  nextPage() {
    this.httpService.nextPage(this.page,this.generChoosed)
    .subscribe(
      dados => 
      {
        this.result.total_pages = dados.total_pages;
        this.result.total_results = dados.total_results;
        this.result.page = dados.page;
        this.movies = dados.results;
      }, 
      erro => {}
    );
  }
  // Método para abrir pop-up com detalhes do filme
  openDialog(movieId: number): void {
    let classe: string = "";
    if (this.highContrastTheme){
      classe = 'dialog-contrast';
    }
    const dialogRef = this.dialog.open( DetalhesFilmeComponent, {
      width: '600px',
      data: { id: movieId, size: this.image_size, fontSize : this.fontSize },
      panelClass: classe
    });
  }
  // Método para mudar os filmes que serão listados, recebendo o id de genero escolhido no seletor-genero componente
  changeGener(evento): void {
    this.result = evento.genreResult;
    this.generChoosed = evento.choosed;
    this.nextPage();
  }

  changeFind(movies): void {
    this.movies = movies;
    this.result.total_pages = null;
  }

  changeTheme(): void {
    this.highContrastTheme = !this.highContrastTheme;
  }

  changeFontSize( value ): void {
    //this.changeFont = value.value;
    this.fontSize = value.fontSize;
  }
}
