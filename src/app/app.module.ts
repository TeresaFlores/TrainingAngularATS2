import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { CartService } from './services/cart/cart.service';
import { FoodService } from './services/food/food.service';
import { MovieService } from './services/movies/movie.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule, ComponentsModule],
  providers: [CartService, FoodService, MovieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
