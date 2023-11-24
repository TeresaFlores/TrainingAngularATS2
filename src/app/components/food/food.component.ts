import { Component } from '@angular/core';
import { foodOptions } from '../../../constants/food';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent {
  foodList = foodOptions;
  currency: any;
  constructor(private moviesService: MoviesService) {}

  validateValue(currencyReceived: string) {
    this.currency = currencyReceived;
  }

  addFoodToCart(foodId: number) {
    const foundFoodElement = this.foodList.filter(
      (element) => element.id === foodId
    )[0];
    this.moviesService.changeList(foundFoodElement);
  }
}
