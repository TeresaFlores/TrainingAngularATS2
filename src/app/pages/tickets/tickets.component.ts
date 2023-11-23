import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies/movie.service';
import { MOVIES } from '../constants';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  ticketInputs: number[] = [];
  movies = MOVIES;

  constructor(
    private movieService: MovieService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
    this.setDefaultTicketNumberForMovies();
  }

  setDefaultTicketNumberForMovies() {
    this.movies.map(() => {
      this.ticketInputs.push(1);
    });
  }

  addTicketToCart(movieId: number) {
    const movie = this.movies[movieId].title;
    const qty = this.ticketInputs[movieId];
    const ticket = this.cartService.ticketBuilder(movie, qty);
    this.cartService.AddMovieTicket(ticket);
  }
}
