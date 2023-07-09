import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';
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

  //----- calculate total
  get total() {
    const calculatePrice = this.cartItems.reduce((prevVal: any, currentVal) => {
      let totalOrderItem = currentVal.quantity * currentVal.price;
      return prevVal + totalOrderItem;
    }, 0);

    const totalPrice = calculatePrice;
    return totalPrice;
  }

  btnClick() {
    alert("Thank you for your order!");
    this.cartService.clearCart(this.cartItems)
    this.router.navigateByUrl('/');
  };
}
