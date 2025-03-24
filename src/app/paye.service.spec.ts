import { TestBed } from '@angular/core/testing';

import { PayeService } from './Services/paye.service';

describe('PayeService', () => {
  let service: PayeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
