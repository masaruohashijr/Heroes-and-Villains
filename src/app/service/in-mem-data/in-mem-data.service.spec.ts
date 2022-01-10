import { TestBed } from '@angular/core/testing';

import { HeroInMemDataService as InMemDataService } from './in-mem-data.service';

describe('InMemDataService', () => {
  let service: InMemDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
