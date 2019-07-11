import { GenreResult } from './../models/result.model';
import { Movie } from './../models/movie.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { HttpService } from './../services/filme/http.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'buscar-filme',
  templateUrl: './buscar-filme.component.html',
  styleUrls: ['./buscar-filme.component.scss']
})
export class BuscarFilmeComponent implements OnInit {
  private keyword: string;
  private finded:Movie[];
  private genreResult: GenreResult = {
    results : null,
    total_pages : null,
    total_results : null,
    page : null
  }
  @Output() private changeFind = new EventEmitter();

  constructor( 
   private http: HttpService,
   private liveAnnouncer: LiveAnnouncer
  ) { }

  ngOnInit(){
  }

  notifyChange(){
    this.changeFind.emit(this.genreResult.results);
  }

  getByKeyword(query: string):void{
    this.http.getByKeyword(query)
    .subscribe(
      dados =>{ 
        this.genreResult.results = dados.results; console.log("Variavel adicionado com dados do server:"+ this.genreResult);
        this.genreResult.total_pages = dados.total_pages;
        this.genreResult.total_results = dados.total_results;
        this.genreResult.page = dados.page;
        this.notifyChange();
     }
    ), 
    erro => { console.log(erro); }
  }

  announce(){
    this.liveAnnouncer.announce("Botão pressionado. Gerando nova lista");
    console.log("Estou anunciando");
  }
}
