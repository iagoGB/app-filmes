import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { Result } from 'src/app/models/result.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private api_key: string = `?api_key=7e18fad3e87379a9f2e8d60fb46ff5b0`;
  constructor( 
    private http: HttpClient
  ) {}  

  getTopRated(): Observable<Result> {
    return this.http.get<Result>(`https://api.themoviedb.org/3/movie/top_rated${this.api_key}`);
  }

  getById(movieId: number): Observable<Movie> {
    return this.http.get<Movie>(`https://api.themoviedb.org/3/movie/${movieId}${this.api_key}`);
  }

  getByKeyword(query: string): Observable<Result> {
    return this.http.get<Result>(`https://api.themoviedb.org/3/search/movie${this.api_key}&query=${query}&language=pt-BR`);
  }

  nextPage(p: number, g: number): Observable<Result> {
    return this.http.get<Result>(`https://api.themoviedb.org/3/discover/movie${this.api_key}&with_genres=${g}&page=${p}&language=pt-BR`);
  }  
}
