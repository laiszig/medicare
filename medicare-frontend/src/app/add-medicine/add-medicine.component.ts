import { Component } from '@angular/core';
import { Medicine } from '../list-medicine/medicine';
import { Category } from '../sort-category/category';
import { Company } from '../sort-company/company';
import { SortCategoryService } from '../sort-category/sort-category.service';
import { SortCompanyService } from '../sort-company/sort-company.service';
import { AddMedicineService } from './add-medicine.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css']
})
export class AddMedicineComponent {

  constructor(
    private categoryService: SortCategoryService,
    private companyService: SortCompanyService,
    private addMedicineService: AddMedicineService
  ) {}

  medicines: Medicine[];
  categories: Category[];
  companies: Company[];

    form: any = {
      name: null,
      category: null,
      company: null,
      description: null,
      price: null
    };

  ngOnInit(): void {
      this.categoryService
      .getAllCategories()
      .subscribe((result) => (this.categories = result));
      this.companyService
      .getAllCompanies()
      .subscribe((result) => (this.companies = result));
  }

  onSubmit() {
    console.log(this.form);
    this.addMedicineService.addMedicine(this.form)

    .subscribe(
      data => {
        console.log("Processed")
      },
      error => {
        console.log("Error processing")
        console.log(error)
      }
    );


  }

  btnClick = () => {
    console.log("Medicine Added!");
  };

  categorySelection = (event: any) => {
    const categoryId = event.target.value;
    const category : Category = {
      id: categoryId,
      name: ''
    };
    this.form.category = category;
  };

  companySelection = (event: any) => {
    const companyId = event.target.value;
    const company : Company = {
      id: companyId,
      name: ''
    };
    this.form.company = company;
  };
}
