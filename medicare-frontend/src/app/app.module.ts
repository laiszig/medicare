import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { ListMedicineComponent } from './list-medicine/list-medicine.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMedicineComponent,
    ListMedicineComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
