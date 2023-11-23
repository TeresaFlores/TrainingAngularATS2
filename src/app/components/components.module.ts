import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LinkComponent } from './link/link.component';
import { CardComponent } from './common/card/card.component';
import { ButtonComponent } from './common/button/button.component';
import { InputComponent } from './common/input/input.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { NavHeaderComponent } from './navbar/nav-header/nav-header.component';
import { CartItemListComponent } from './cart/cart-item-list/cart-item-list.component';
import { ToastComponent } from './toast/toast.component';
import { AlertComponent } from './common/alert/alert.component';

@NgModule({
  declarations: [
    LinkComponent,
    CardComponent,
    ButtonComponent,
    InputComponent,
    NavbarComponent,
    NavHeaderComponent,
    FooterComponent,
    CartComponent,
    CartItemListComponent,
    ToastComponent,
    AlertComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CardComponent,
    ButtonComponent,
    InputComponent,
    NavbarComponent,
    NavHeaderComponent,
    FooterComponent,
    CartComponent,
    ToastComponent,
    AlertComponent,
  ],
})
export class ComponentsModule {}
