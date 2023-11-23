import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { FoodComponent } from './food/food.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    TicketsComponent,
    FoodComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent, TicketsComponent, FoodComponent, ContactComponent],
})
export class PagesModule {}
