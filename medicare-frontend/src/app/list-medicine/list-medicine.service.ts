import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';
import { CartService } from '../cart/cart.service';
import { CartItem } from '../cart/cartItem';

@Injectable({
  providedIn: 'root'
})
export class ListMedicineService {

  url: string = 'http://localhost:8080';
  cartService: CartService;

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

  btnClick = (id: number, name: string, price: number) => {
    let cartItem = new CartItem()
    cartItem.id = id
    cartItem.quantity = 1
    cartItem.name = name;
    cartItem.price = price;
    this.cartService.addToCart(cartItem)
  };
}
