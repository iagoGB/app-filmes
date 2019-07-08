import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/filme/http.service';
import { Movie } from '../models/movie.model';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  private title = 'app-filmes';
  private button: string = "consultar";  
  constructor(
    private liveAnnouncer:LiveAnnouncer
  ) {}

  ngOnInit() {
    this.liveAnnouncer.announce("Bem vindo ao Aplicativo de filmes!");
  }


  proximaPagina(){  
  }
}
