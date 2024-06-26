import { TestBed } from '@angular/core/testing';

import { AnotherSampleLibService } from './another-sample-lib.service';

describe('AnotherSampleLibService', () => {
  let service: AnotherSampleLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnotherSampleLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
