import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnualidadAnticipadaComponent } from './anualidad-anticipada.component';

describe('AnualidadAnticipadaComponent', () => {
  let component: AnualidadAnticipadaComponent;
  let fixture: ComponentFixture<AnualidadAnticipadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnualidadAnticipadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnualidadAnticipadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
