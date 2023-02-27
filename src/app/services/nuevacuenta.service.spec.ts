import { TestBed } from '@angular/core/testing';

import { NuevacuentaService } from './nuevacuenta.service';

describe('NuevacuentaService', () => {
  let service: NuevacuentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevacuentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
