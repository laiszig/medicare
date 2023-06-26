import { TestBed } from '@angular/core/testing';

import { SortCompanyService } from './sort-company.service';

describe('SortCompanyService', () => {
  let service: SortCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
