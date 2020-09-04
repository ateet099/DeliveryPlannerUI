import { TestBed } from '@angular/core/testing';

import { DpService } from './dp.service';

describe('DpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DpService = TestBed.get(DpService);
    expect(service).toBeTruthy();
  });
});
