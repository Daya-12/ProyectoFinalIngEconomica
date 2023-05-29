import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnualidadComponent } from './anualidad.component';

describe('AnualidadComponent', () => {
  let component: AnualidadComponent;
  let fixture: ComponentFixture<AnualidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnualidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnualidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
