import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie!: any;
  genres!: any;

  constructor(
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.moviesService
        .searchMovieById(params['movieId'])
        .subscribe((response) => {
          this.movie = response;
          this.genres = response.genres
            .map((element: any) => element.name)
            .join(', ');
        });
    });
  }
  addToCart() {
    this.moviesService.changeList(this.movie);
  }
}
