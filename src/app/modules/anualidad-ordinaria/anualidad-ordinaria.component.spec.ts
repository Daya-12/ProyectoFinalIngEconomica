import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnualidadOrdinariaComponent } from './anualidad-ordinaria.component';

describe('AnualidadOrdinariaComponent', () => {
  let component: AnualidadOrdinariaComponent;
  let fixture: ComponentFixture<AnualidadOrdinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnualidadOrdinariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnualidadOrdinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
