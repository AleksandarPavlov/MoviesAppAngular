import { TestBed } from '@angular/core/testing';

import { TrailersServiceService } from './trailers-service.service';

describe('TrailersServiceService', () => {
  let service: TrailersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrailersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
