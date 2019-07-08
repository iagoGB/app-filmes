import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarFilmeComponent } from './buscar-filme.component';

describe('BuscarFilmeComponent', () => {
  let component: BuscarFilmeComponent;
  let fixture: ComponentFixture<BuscarFilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarFilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
