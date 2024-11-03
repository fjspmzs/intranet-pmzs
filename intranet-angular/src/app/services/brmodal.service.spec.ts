import { TestBed } from '@angular/core/testing';

import { BrModalService } from './brmodal.service';

describe('BrmodalService', () => {
  let service: BrModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
