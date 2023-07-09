import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { ListMedicineService } from '../list-medicine/list-medicine.service';
import { SortCategoryService } from '../sort-category/sort-category.service';
import { SortCompanyService } from '../sort-company/sort-company.service';
import { Medicine } from '../list-medicine/medicine';
import { Category } from '../sort-category/category';
import { Company } from '../sort-company/company';
import { CartItem } from '../cart/cartItem';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}

  cartItems: CartItem[];
  filters = {
    keyword: '',
  };

  ngOnInit(): void {
    this.cartItems = this.cartService.loadCart();
    console.log("--")
    console.log(this.cartItems);
  }

  btnClick() {
    alert("Thank you for your order!");
    this.cartService.clearCart(this.cartItems)
    this.router.navigateByUrl('/');
  };
}
