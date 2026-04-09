import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorTareas } from './gestor-tareas';

describe('GestorTareas', () => {
  let component: GestorTareas;
  let fixture: ComponentFixture<GestorTareas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestorTareas],
    }).compileComponents();

    fixture = TestBed.createComponent(GestorTareas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
