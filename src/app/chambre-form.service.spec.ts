import { TestBed } from '@angular/core/testing';

import { ChambreFormService } from './chambre-form.service';

describe('ChambreFormService', () => {
  let service: ChambreFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChambreFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
