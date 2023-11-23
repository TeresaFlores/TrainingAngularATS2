import { Component, OnInit } from '@angular/core';
import { MOVIES } from '../constants';
import { MovieService } from '../../services/movies/movie.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies = MOVIES;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }
}
