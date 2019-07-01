import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = "https://api.themoviedb.org/3/movie/"; //${query} 
  api_key: string = "7e18fad3e87379a9f2e8d60fb46ff5b0";

  constructor ( 
    private http: HttpClient
  ) {}

  getLatest(): any {
    return this.http.get<any>(this.url+"latest?api_key="+this.api_key);
  }

}
