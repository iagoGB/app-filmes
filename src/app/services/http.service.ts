import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  base_movie_url: string = "https://api.themoviedb.org/3/movie/"//${query} 
  base_image_url: string = "https://image.tmdb.org/t/p/";
  api_key: string = "?api_key=7e18fad3e87379a9f2e8d60fb46ff5b0";

  constructor ( 
    private http: HttpClient
  ) {}

  getImage (file_path: string ): any {
    return this.http.get(this.base_image_url+"w185/"+file_path);
  }

  getLatest(): any {
    return this.http.get<any>(this.base_movie_url+"latest"+this.api_key);
  }

  getPopular(): any {
    return this.http.get<Movie[]>(this.base_movie_url+"popular"+this.api_key);
  }

  getTopRated(): any {
    return this.http.get<Movie[]>(this.base_movie_url+"top_rated"+this.api_key);
  }
  

}
