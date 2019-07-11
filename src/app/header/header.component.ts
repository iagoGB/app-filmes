import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private changeFont: boolean = false;
  @Output()  private sendChangeTheme = new EventEmitter();
  @Output() private sendChangeFont = new EventEmitter();

  constructor(
  ) {}  

  ngOnInit() {
  }
  
  notifyTheme(): void {
    this.sendChangeTheme.emit();
  }

  notifyFont(value: boolean): void {
    this.sendChangeFont.emit(value);
    this.changeFontSize(value);
  }

  changeFontSize(value: boolean): void {
    this.changeFont = value;
  }
}
