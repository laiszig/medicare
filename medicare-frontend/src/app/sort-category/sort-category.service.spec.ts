import { TestBed } from '@angular/core/testing';

import { SortCategoryService } from './sort-category.service';

describe('SortCategoryService', () => {
  let service: SortCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
