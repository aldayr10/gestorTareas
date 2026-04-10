import { TestBed } from '@angular/core/testing';

import { CatPrioridadesService } from './cat-prioridades-service';

describe('CatPrioridades', () => {
  let service: CatPrioridadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatPrioridadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
