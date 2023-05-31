import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnualidadPerpetuaComponent } from './anualidad-perpetua.component';

describe('AnualidadPerpetuaComponent', () => {
  let component: AnualidadPerpetuaComponent;
  let fixture: ComponentFixture<AnualidadPerpetuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnualidadPerpetuaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnualidadPerpetuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
