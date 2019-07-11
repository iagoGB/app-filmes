import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GeneroService } from '../services/genero/genero.service';
import { Genre } from '../models/genre.model';
import { Movie } from '../models/movie.model';
import { GenreResult } from '../models/result.model';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'seletor-genero',
  templateUrl: './seletor-genero.component.html',
  styleUrls: ['./seletor-genero.component.scss']
})
export class SeletorGeneroComponent implements OnInit {
  private genres: Genre[];
  private genreResult: GenreResult = {
    total_pages: 0,
    total_results: 0,
    page: 0,
    results: null
  }
  private choosed: number;
  @Output() private changeGener = new EventEmitter();

  constructor(
    private generoService: GeneroService,
    private liveAnnouncer: LiveAnnouncer
  ) { }

  ngOnInit() {
    this.getGeners();
  }

 
  // Mudar para o genero escolhido
  changeChoosed(value:number):void{
    this.choosed = value; 
    this.getGenreById(this.choosed);
    
  }
  // Notifica a mudança para o componente pai 
  notifyChange(){
    this.changeGener.emit({choosed: this.choosed, genreResult: this.genreResult});
    console.log(` \n notifychange(): Escolhido: ${this.choosed}`);
  }
  // Método para solicitar consulta dos filmes por gênero
  getGenreById(value:number):void{
    this.generoService.loadGenreById(value).subscribe( 
      dados =>{
        this.genreResult.total_pages = dados.total_pages;
        this.genreResult.total_results = dados.total_results;
        this.genreResult.page = dados.page;
        this.notifyChange();
      },
      erro =>{ 
        console.log(erro);
      }
    );
  }
  // Método para solicitar todos os gêneros disponíveis
  getGeners():void {
    this.generoService.loadGenres().subscribe ( dados => this.genres = dados.genres );
  }

}
