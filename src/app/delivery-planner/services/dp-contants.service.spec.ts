import { TestBed } from '@angular/core/testing';

import { DpConstantsService } from './dp-contants.service';

describe('DpContantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DpConstantsService = TestBed.get(DpConstantsService);
    expect(service).toBeTruthy();
  });
});
