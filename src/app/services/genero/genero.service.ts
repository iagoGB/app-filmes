import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { GeneroResult, Result } from 'src/app/models/result.model';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  constructor( 
    private http: HttpClient
  ) { }

  loadGenreById(genreId: number): Observable<Result> {
    return this.http.get<Result>(`https://api.themoviedb.org/3/discover/movie?api_key=7e18fad3e87379a9f2e8d60fb46ff5b0&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genreId}&language=pt-BR`);
  }

  loadGenres(): Observable<GeneroResult> {
    return this.http.get<GeneroResult>(`https://api.themoviedb.org/3/genre/movie/list?api_key=7e18fad3e87379a9f2e8d60fb46ff5b0&language=pt-BR`);
  }
}
