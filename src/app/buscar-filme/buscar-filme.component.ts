import { Result } from './../models/result.model';
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
  private finded: Movie[];
  private result: Result = {
    results : null,
    total_pages : null,
    total_results : null,
    page : null
  };
  @Output() private changeFind = new EventEmitter();

  constructor( 
   private http: HttpService,
   private liveAnnouncer: LiveAnnouncer
  ) { }

  ngOnInit() {
  }
  // Notificação para o componente pai
  notifyChange() {
    this.changeFind.emit(this.result.results);
  }
  // Buscar filme por palavra chave. Fazendo requisição e obtendo resultados
  getByKeyword(query: string): void {
    this.http.getByKeyword(query)
    .subscribe(
      dados =>
      { 
        this.result.results = dados.results;
        this.result.total_pages = dados.total_pages;
        this.result.total_results = dados.total_results;
        this.result.page = dados.page;
        this.notifyChange();
      }
    ), 
    erro => { };
  }
  // Feedback para leitor de tela
  announce() {
    this.liveAnnouncer.announce(`Botão pressionado. Gerando nova lista`);
  }
}
