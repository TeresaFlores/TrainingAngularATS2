import { Component, Inject, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { CART, ITEM } from '../../services/response-mockups/cart.mockup';
import {
  INITIAL_PRICE,
  FOOD_TITLE,
  TICKET_TITLE,
  NO_ITEMS_IN_CART_MESSAGE,
} from './constants';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  currency = () => 'USD';
  cart = () => CART;
  showToast = () => false;
  purchaseLoader = false;
  purchaseTimeOut: ReturnType<typeof setTimeout> = setTimeout(() => {});
  hideToastTimeout: ReturnType<typeof setTimeout> = setTimeout(() => {});
  foodItems = [ITEM];
  ticketItems = [ITEM];
  ticketTotalPrice = INITIAL_PRICE;
  foodTotalPrice = INITIAL_PRICE;
  cartTotalPrice = INITIAL_PRICE;
  foodTitle = FOOD_TITLE;
  ticketTitle = TICKET_TITLE;
  noItemMessage = NO_ITEMS_IN_CART_MESSAGE;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.currency = this.cartService.getCurrency();
    this.cart = this.cartService.getCart();
    this.ticketItems = this.cart().tickets.items;
    this.foodItems = this.cart().food.items;
    this.showToast = this.cartService.getShowToast();
  }

  setCurrency(currency: string) {
    this.cartService.setCurrency(currency);
  }

  getCartTotalPrice() {
    return this.cart().tickets.totalPrice + this.cart().food.totalPrice;
  }

  purchaseItems() {
    this.purchaseLoader = true;
    this.purchaseTimeOut = setTimeout(() => {
      this.cartService.setShowToast();
      this.purchaseLoader = false;
    }, 1000);
    this.hideToastTimeout = setTimeout(() => {
      this.cartService.setCloseToast();
    }, 5000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.hideToastTimeout);
  }
}
