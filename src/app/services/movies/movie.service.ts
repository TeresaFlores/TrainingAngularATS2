import { Injectable } from '@angular/core';
import { MOVIES } from '../response-mockups/movies.mockup';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  getMovies() {
    return MOVIES;
  }
}
