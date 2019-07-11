import { Component, OnInit } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Router } from '@angular/router';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  private title = 'aplicativo de filmes';
  private button: string = "consultar";  
  constructor(
    private liveAnnouncer:LiveAnnouncer,
    private router: Router
  ) {}

  ngOnInit() {
    this.liveAnnouncer.announce("Bem vindo ao Aplicativo de filmes!");
    setTimeout(()=>{ this.nextPage()},4000);
    
  }

  nextPage(){  
    this.router.navigate(['/home']);
  }
}
