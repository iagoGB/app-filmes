import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { HttpService } from '../services/http.service';
import { MatDialog } from '@angular/material';
import { DetalhesFilmeComponent } from '../detalhes-filme/detalhes-filme.component';
import { GeneroService } from '../services/genero/genero.service';
import { Gender } from '../models/gender.model';

@Component({
  selector: 'app-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.scss']
})
export class ListagemFilmesComponent implements OnInit {
  private movies: Movie[];
  private genders: Gender[];
  private base_image_url: string = "https://image.tmdb.org/t/p/"
  private image_size = "w500";

  constructor ( 
    private httpService: HttpService,
    private generoService: GeneroService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.consultarFilmes();
    this.getGenders();
  };

  //Consultar filmes mais bem votados
  consultarFilmes() {
    return this.httpService.getTopRated()
    .subscribe( 
      dados => {
        this.movies = dados.results;
        console.log("Variável movie:"+ this.movies);
      },
      error => { 
         console.log (error);
      }
    )
  };

  //Método para carregar as imagens dos filmes
  getImage(file_path: string ): string {
    return this.httpService.getImage(file_path);
  }

  getGenders() : void {
    this.generoService.loadGenders().subscribe ( dados => this.genders = dados.genres );
  }

  //Método para abrir pop-up com detalhes do filme
  openDialog( movieId : number): void {
    const dialogRef = this.dialog.open( DetalhesFilmeComponent, {
      width: '600px',
      data: { id: movieId }
    });

    console.log(`Id do filme selecionado: ${movieId }`);

    dialogRef.afterClosed().subscribe ( action =>
      console.log("Fechou")
    )
  }
}
