import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTarea } from './eliminar-tarea';

describe('EliminarTarea', () => {
  let component: EliminarTarea;
  let fixture: ComponentFixture<EliminarTarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarTarea],
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarTarea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
