import { CurrencyPipe } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from './cart.service';
import { CartItem } from './cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  @ViewChildren('subTotalWrap') subTotalItems: QueryList<ElementRef>;
  @ViewChildren('subTotalWrap_existing')
  subTotalItems_existing: QueryList<ElementRef>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private currencyPipe: CurrencyPipe
  ) {}

  cartItems: CartItem[];
  item: CartItem;

  ngOnInit(): void {
    this.cartItems = this.cartService.loadCart();
    console.log("--")
    console.log(this.cartItems);
  }

  //----- remove specific item
  removeFromCart(cartItem: CartItem) {
    console.log('remove item clicked');
    this.cartService.removeItem(cartItem);
    this.cartItems = this.cartService.loadCart();
  }

  //----- clear cart cartItems
  clearCart(cartItems: CartItem[]) {
    this.cartService.clearCart(cartItems);
    this.cartItems = [...this.cartService.loadCart()];
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

  //----- calculate total per item
  changeSubtotal(item:CartItem, index:any) {
    const qty = item.quantity;
    const amt = item.price;
    const subTotal = amt * qty;
    const subTotal_converted = this.currencyPipe.transform(subTotal, "USD");

    this.subTotalItems.toArray()[
      index
    ].nativeElement.innerHTML = subTotal_converted;
    this.cartService.saveCart();
  }

  saveCart() {
    this.cartService.saveCart;
  }

  btnClick() {
    alert("Tá pago!!");
    this.clearCart(this.cartItems)
    this.router.navigateByUrl('/purchase');
  };

}
