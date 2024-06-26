import { TestBed } from '@angular/core/testing';

import { SampleLibService } from './sample-lib.service';

describe('SampleLibService', () => {
  let service: SampleLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
