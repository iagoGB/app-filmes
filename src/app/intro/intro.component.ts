import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  private title = 'app-filmes';
  private button: string = "consultar";
  private dado: any;

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit() {
  }

  consultar(): any {
    return this.httpService.getLatest()
    .subscribe( 
      data => {
        this.dado = data;
        console.log(data);
      },
      error => { 
         console.log (error);
      }
    );
  }
}
