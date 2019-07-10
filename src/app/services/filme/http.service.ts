import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie.model';
import { MovieResult } from 'src/app/models/result.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private base_movie_url: string = "https://api.themoviedb.org/3/movie/"//${query} 
  private base_image_url: string = "https://image.tmdb.org/t/p/";
  private api_key: string = "?api_key=7e18fad3e87379a9f2e8d60fb46ff5b0";

  constructor( 
    private http: HttpClient
  ) {}

  getImage (file_path: string ): any {
    return this.http.get(this.base_image_url+"w185/"+file_path);
  }

  getTopRated(): Observable<any> {
    return this.http.get<Movie[]>(this.base_movie_url + "top_rated"+this.api_key);
  }

  getById( movieId: number ): Observable<any> {
    return this.http.get<MovieResult>(this.base_movie_url+movieId+this.api_key);
  }

  getByKeyword( query: string ): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/search/movie${this.api_key}&query=${query}&language=pt-BR`);
  }

  nextPage(p:number,g:number): Observable<any> {
    return this.http.get<Movie>(`https://api.themoviedb.org/3/discover/movie${this.api_key}&with_genres=${g}&page=${p}&language=pt-BR`);
  }
  

}
