import { Injectable, Signal, signal } from '@angular/core';
import { CART } from '../response-mockups/cart.mockup';
import { FOOD } from '../response-mockups/food.mockup';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  private currency = signal('USD');
  private cart = signal(CART);
  private defaultPriceInUSD = 3;
  private showToast = signal(false);

  getCurrency() {
    return this.currency;
  }

  getCart() {
    return this.cart;
  }

  getShowToast() {
    return this.showToast;
  }

  private itemInCartValidation(
    items: Array<{ itemName: string; qty: number; price: number }>,
    addedItem: { itemName: string; qty: number; price: number }
  ) {
    let newItems = items;
    const isItemInTheCartIndex = newItems.findIndex(
      (item) => item.itemName === addedItem.itemName
    );
    // check if the item exist
    if (isItemInTheCartIndex >= 0) {
      const previousQty = newItems[isItemInTheCartIndex].qty;
      const previousPrice = newItems[isItemInTheCartIndex].price;
      newItems[isItemInTheCartIndex].qty = previousQty + addedItem.qty;
      newItems[isItemInTheCartIndex].price = previousPrice + addedItem.price;
    } else {
      newItems.push(addedItem);
    }

    return newItems;
  }

  private addItemToCart(
    cartSectionToUpdate: {
      items: Array<{ itemName: string; qty: number; price: number }>;
      totalPrice: number;
    },
    itemToAdd: { itemName: string; qty: number; price: number }
  ) {
    const items = cartSectionToUpdate.items.filter((item) => item.itemName);
    let newItems = this.itemInCartValidation(items, itemToAdd);
    cartSectionToUpdate.items = newItems;
    cartSectionToUpdate.totalPrice =
      cartSectionToUpdate.totalPrice + itemToAdd.price;

    return cartSectionToUpdate;
  }

  AddMovieTicket(movieTicket: {
    itemName: string;
    qty: number;
    price: number;
  }) {
    console.log('Adding Movie ticktes to cart for movie', movieTicket);
    let newCart = this.cart();
    const newCartTickets = this.addItemToCart(this.cart().tickets, movieTicket);
    newCart.tickets = newCartTickets;
    newCart.totalItem = newCart.totalItem + movieTicket.qty;
    this.cart.set(newCart);
  }

  AddFood(food: { itemName: string; qty: number; price: number }) {
    console.log('adding food to cart:', food);
    let newCart = this.cart();
    const newFoodItems = this.addItemToCart(this.cart().food, food);
    newCart.food = newFoodItems;
    newCart.totalItem = newCart.totalItem + food.qty;
    this.cart.set(newCart);
  }

  setCurrency(currency: string) {
    this.currency.set(currency);
  }

  setShowToast() {
    console.log('show toast');
    this.showToast.set(true);
  }

  setCloseToast() {
    this.showToast.set(false);
  }

  ticketBuilder(itemName: string, qty: number) {
    return {
      itemName,
      qty,
      price: qty * this.defaultPriceInUSD,
    };
  }
}
