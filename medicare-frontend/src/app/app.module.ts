import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { ListMedicineComponent } from './list-medicine/list-medicine.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CurrencyPipe } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { SecurityInterceptorService } from './security-interceptor.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMedicineComponent,
    ListMedicineComponent,
    CartComponent,
    PaymentComponent,
    ImageSliderComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgImageSliderModule
  ],
  providers: [CurrencyPipe, { provide: HTTP_INTERCEPTORS, useClass: SecurityInterceptorService, multi: true }] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
