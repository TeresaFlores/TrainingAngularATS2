import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title = '';
  @Input() class = '';
  @Input() topImage = '';
  @Input() altText = 'card image';
}
