import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private changeFont: boolean = false;
  private fontSizes: number[] = [16,18,22,25,29];
  private n: number = 0;
  private selectedSize:number = this.fontSizes[this.n];
  @Output()  private sendChangeTheme = new EventEmitter();
  @Output() private sendChangeFont = new EventEmitter();

  constructor(
  ) {}  

  ngOnInit() {
  }
  
  notifyTheme(): void {
    this.sendChangeTheme.emit();
  }

  notifyFont( ): void {
    this.sendChangeFont.emit({fontSize: this.selectedSize});
  }

  changeFontSize(value: boolean): void {
    this.changeFont = value;

  }

  increaseFont(): void {
    if (this.n+1 > 4){
      return;
    }
    this.n++;
    this.selectedSize = this.fontSizes[this.n];
  }
  decreaseFont(): void {
    if (this.n-1 < 0){
      return;
    }
    this.n--;
    this.selectedSize = this.fontSizes[this.n];
  }
  redefineFont(): void {
    this.n = 0;
    this.selectedSize = this.fontSizes[this.n];
  }
}
