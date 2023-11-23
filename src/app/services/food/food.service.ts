import { Injectable } from '@angular/core';
import { FOOD } from '../response-mockups/food.mockup';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFood() {
    return FOOD;
  }
}
