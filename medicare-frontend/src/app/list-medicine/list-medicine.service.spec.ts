import { TestBed } from '@angular/core/testing';

import { ListMedicineService } from './list-medicine.service';

describe('ListMedicineService', () => {
  let service: ListMedicineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListMedicineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
