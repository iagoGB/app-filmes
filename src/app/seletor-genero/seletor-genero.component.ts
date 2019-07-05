import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GeneroService } from '../services/genero/genero.service';
import { Genre } from '../models/genre.model';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-seletor-genero',
  templateUrl: './seletor-genero.component.html',
  styleUrls: ['./seletor-genero.component.scss']
})
export class SeletorGeneroComponent implements OnInit {
  private genres: Genre[];
  private movies: Movie[];
  private choosed: number;
  private page: number;
  @Output() private changeGener = new EventEmitter();

  constructor(
    private generoService: GeneroService
  ) { }

  ngOnInit() {
    this.getGeners();
  }

 
  // Mudar para o genero escolhido
  changeChoosed(value:number):void{
    this.choosed = value; 
    this.getGenreById(this.choosed, this.page);
    
  }
  // Notifica a mudança para o componente pai 
  notifyChange(){
    this.changeGener.emit(this.movies);
    console.log(` Novo array de filmes: ${ this.movies } \n notifychange(): Escolhido: ${this.choosed}`);
  }
  // Método para solicitar consulta dos filmes por gênero
  getGenreById(value:number,page:number):void{
    this.generoService.loadGenreById(value,page).subscribe( 
      dados =>{
        this.movies = dados.results;
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
