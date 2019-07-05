import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  private choosed: number;

  constructor ( 
    private http: HttpClient
  ) { }

  loadGenreById(genreId:number,page: number):any{
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=7e18fad3e87379a9f2e8d60fb46ff5b0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreId}`);
  }

  loadGenres(): any {
    return this.http.get("https://api.themoviedb.org/3/genre/movie/list?api_key=7e18fad3e87379a9f2e8d60fb46ff5b0&language=pt-BR");
  }
}
