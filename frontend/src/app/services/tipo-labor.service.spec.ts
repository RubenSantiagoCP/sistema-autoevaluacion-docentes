import { TestBed } from '@angular/core/testing';

import { TipoLaborService } from './tipo-labor.service';

describe('TipoLaborService', () => {
  let service: TipoLaborService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoLaborService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
