import { TestBed } from '@angular/core/testing';

import { DpEventsService } from './dp-events.service';

describe('DpEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DpEventsService = TestBed.get(DpEventsService);
    expect(service).toBeTruthy();
  });
});
