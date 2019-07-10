import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Movie } from '../models/movie.model';
import { HttpService } from '../services/filme/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.component.html',
  styleUrls: ['./detalhes-filme.component.scss']
})
export class DetalhesFilmeComponent implements OnInit {
  private movieDetail: Movie;
  private image_size: string;
  
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
    this.image_size = this.data.size;
  }

  getDetail( movieId: number ): void {
    this.movieService.getById(movieId).subscribe(
      dado => {
        this.movieDetail = dado;
      },
      erro =>{
        console.log(erro);
      }
    );
  }
}
