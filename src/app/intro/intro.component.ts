import { Component, OnInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Router } from '@angular/router';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  title = 'aplicativo de filmes';
  button: string = "consultar";  
  time: number = 3000;
  constructor(
    private liveAnnouncer: LiveAnnouncer,
    private router: Router
  ) {}

  ngOnInit() {
    this.liveAnnouncer.announce("Bem vindo ao Aplicativo de filmes!");
    setTimeout(() => { this.nextPage(); }, this.time);    
  }

  nextPage() {  
    this.router.navigate(['/home']);
  }
}
