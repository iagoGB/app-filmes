import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorGeneroComponent } from './seletor-genero.component';

describe('SeletorGeneroComponent', () => {
  let component: SeletorGeneroComponent;
  let fixture: ComponentFixture<SeletorGeneroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeletorGeneroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeletorGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
