import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gender } from 'src/app/models/gender.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  private choosed: number;

  constructor ( 
    private http: HttpClient
  ) {}

  loadGenders(): any {
    return this.http.get("https://api.themoviedb.org/3/genre/movie/list?api_key=7e18fad3e87379a9f2e8d60fb46ff5b0&language=pt-BR")
  }
}
