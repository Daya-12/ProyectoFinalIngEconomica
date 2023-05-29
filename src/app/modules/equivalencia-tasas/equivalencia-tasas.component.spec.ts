import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquivalenciaTasasComponent } from './equivalencia-tasas.component';

describe('EquivalenciaTasasComponent', () => {
  let component: EquivalenciaTasasComponent;
  let fixture: ComponentFixture<EquivalenciaTasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquivalenciaTasasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquivalenciaTasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
