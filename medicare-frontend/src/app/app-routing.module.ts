import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMedicineComponent } from './list-medicine/list-medicine.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';

const routes: Routes = [
  {"path":"medicines", component: ListMedicineComponent},
  {"path":"addmedicine", component: AddMedicineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
