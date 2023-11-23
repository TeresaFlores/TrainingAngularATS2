import { Component, Input } from '@angular/core';
import { ITEM } from '../../../services/response-mockups/cart.mockup';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.scss'],
})
export class CartItemListComponent {
  @Input() items = [ITEM];
  @Input() currency = '';
}
