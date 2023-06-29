import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Medicine } from '../list-medicine/medicine';

@Injectable({
  providedIn: 'root'
})
export class AddMedicineService {

  url: string = "http://localhost:8080"

  constructor(private httpClient : HttpClient) { }

  addMedicine(medicine: Medicine) {
    return this.httpClient.post<any>(this.url + "/addmedicine", medicine)
    .pipe(map(result => {
      console.log("SERVICE LOG PIPE")
      console.log(result)
      return result;
    }));
  }
}
