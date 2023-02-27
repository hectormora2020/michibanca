import { TestBed } from '@angular/core/testing';

import { IncrementasaldoService } from './incrementasaldo.service';

describe('IncrementasaldoService', () => {
  let service: IncrementasaldoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncrementasaldoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
