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
  

  constructor(
    private movieService: HttpService,
    public dialogRef: MatDialogRef<DetalhesFilmeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // criar uma interface para os dados que vão compor o dialog
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.getDetail(this.data.id);
  }

  getDetail( movieId: number ):Movie {
    return this.movieService.getById(movieId).subscribe(
      dado => {
        this.movieDetail = dado;
      },
      erro =>{
        console.log(erro);
      }
    );
  }
}
