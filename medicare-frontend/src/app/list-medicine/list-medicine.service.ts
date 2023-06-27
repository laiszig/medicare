import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class ListMedicineService {

  url: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  //get all medicines
  getAllMedicines(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.url + "/medicines");
  }

  getMedicinesByCateogory(id: any): Observable<Medicine[]> {
    return this.http.post<Medicine[]>(this.url + "/searchmedicines", {"genreId" : id})
  }

  getMedicineById(id: number): Observable<Medicine> {
    return this.http.get<Medicine>(this.url + "/medicines/" + id);
  }

}
