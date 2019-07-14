import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Movie } from '../models/movie.model';
import { HttpService } from '../services/filme/http.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.component.html',
  styleUrls: ['./detalhes-filme.component.scss']
})
export class DetalhesFilmeComponent implements OnInit, OnDestroy {
  private movieSub: Subscription;
  private movieDetail: Movie;
  private imageSize: string;
  private fontSize:number = 16;

  constructor(
    private movieService: HttpService,
    public dialogRef: MatDialogRef<DetalhesFilmeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // cria uma variavel que traz os dados que vão compor o dialog; Componente que o chama, informa os dados. (Exemplo: id do filme, tamanho da imagem para renderizar)
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.getDetail(this.data.id);
    this.imageSize = this.data.size;
    this.fontSize = this.data.fontSize;
  }

  ngOnDestroy() {
    this.movieSub.unsubscribe();
  }

  getDetail( movieId: number ): void {
    this.movieSub = this.movieService.getById(movieId).subscribe(
      movie => { this.movieDetail = movie; },
      erro => { console.log(erro); }
    );
  }
}
