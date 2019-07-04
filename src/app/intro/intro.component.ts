import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  private title = 'app-filmes';
  private button: string = "consultar";  
  constructor(
    private httpService: HttpService
  ) {}

  ngOnInit() {
  }


  proximaPagina(){  
  }
}
