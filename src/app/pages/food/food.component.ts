import { Component, OnInit } from '@angular/core';
import { FOOD } from '../constants';
import { FoodService } from '../../services/food/food.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  food = FOOD;
  foodInputs: number[] = [];

  constructor(
    private foodService: FoodService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.food = this.foodService.getFood();
    this.setDefaultNumberForFoodItem();
  }

  setDefaultNumberForFoodItem() {
    this.food.map(() => {
      this.foodInputs.push(1);
    });
  }

  addFoodToCart(foodId: number) {
    const food = this.food[foodId];
    const qty = this.foodInputs[foodId];
    const itemName = food.name;
    const price = food.price * qty;

    this.cartService.AddFood({ itemName, qty, price });
  }
}
