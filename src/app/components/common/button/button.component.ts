import { Component, Input } from '@angular/core';
import { PRIMARY_CLASS, SECONDARY_CLASS } from './constant';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() buttonType = 'primary';
  @Input() type = 'button';
  @Input() buttonText = '';
  @Input() class = '';
  @Input() onClick = () => {};
  @Input() disabled = false;

  getClass(buttonType: string) {
    let buttonClass = '';
    switch (buttonType.toLocaleLowerCase()) {
      case 'secondary':
        buttonClass = SECONDARY_CLASS;
        break;
      default:
        buttonClass = PRIMARY_CLASS;
        break;
    }

    return buttonClass;
  }
}
