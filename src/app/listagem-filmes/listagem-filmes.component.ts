import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {
  private movies: Movie[];
  private base_image_url: string = "https://image.tmdb.org/t/p/"
  private image_size = "w500";

  constructor ( 
    private httpService: HttpService 
  ) { }

  ngOnInit() {
    this.consultarFilmes();
  };

  consultarFilmes() {
    return this.httpService.getTopRated()
    .subscribe( 
      dados => {
        this.movies = dados.results;
        console.log("Variável movie:"+ this.movies);
      },
      error => { 
         console.log (error);
      }
    )
  };

  getImage(file_path: string ): string {
    return this.httpService.getImage(file_path);
  }
}
