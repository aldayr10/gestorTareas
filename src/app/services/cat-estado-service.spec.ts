import { TestBed } from '@angular/core/testing';

import { CatEstadoService } from './cat-estado-service';

describe('CatEstado', () => {
  let service: CatEstadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatEstadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
