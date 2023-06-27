import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from './medicine';
import { SortCategoryService } from '../sort-category/sort-category.service';
import { ListMedicineService } from './list-medicine.service';
import { Category } from '../sort-category/category';

@Component({
  selector: 'app-list-medicine',
  templateUrl: './list-medicine.component.html',
  styleUrls: ['./list-medicine.component.css'],
})
export class ListMedicineComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private medicineService: ListMedicineService,
    private categoryService: SortCategoryService
  ) {}

  medicines: Medicine[];
  categories: Category[];
  filters = {
    keyword: '',
  };

  ngOnInit(): void {
    this.medicineService.getAllMedicines().subscribe((result) => {
      console.log(result);
      this.medicines = result;
    });
    this.categoryService
      .getAllCategories()
      .subscribe((result) => (this.categories = result));
    console.log(this.categories);
  }

  categorySelection = (event: any) => {
    const categoryId = event.target.value;
    if (categoryId != 0) {
      this.medicineService
        .getMedicinesByCateogory(categoryId)
        .subscribe((result) => (this.medicines = result));
    } else {
      this.medicineService
        .getAllMedicines()
        .subscribe((result) => (this.medicines = result));
    }
  };

  listMedicines() {
    this.medicineService
      .getAllMedicines()
      .subscribe((data) => (this.medicines = this.filterMedicines(data)));
  }

  filterMedicines(medicines: Medicine[]) {
    return medicines.filter((m) => {
      return m.name.toLowerCase().includes(this.filters.keyword.toLowerCase());
    });
  }
}
