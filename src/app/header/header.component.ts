import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()  private changeTheme = new EventEmitter();
  constructor(

  ) {}

  ngOnInit() {
  }

  notify():void {
    this.changeTheme.emit();
    console.log("É pra mudar o tema");
  }
}
