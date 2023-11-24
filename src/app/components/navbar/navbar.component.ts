import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  movieTitle!: string;
  itemsList: any[] = [];
  payed: boolean = false;
  total: number = 0;

  @Input() navbarProperty!: any[];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.actualProperty.subscribe((property) => {
      this.itemsList.push(property);

      this.total = this.itemsList.reduce(
        (total, item) =>
          item.price
            ? total + item.price
            : total + parseFloat(((item.vote_average / 2) * 10).toFixed(2)),
        0
      );
    });
    this.itemsList.shift();
  }

  filterMovies(e: Event) {
    e.preventDefault();
  }

  payAction() {
    let total = 0;
    this.itemsList.forEach((element) => {
      if (element.price) {
        total += element.price;
      }

      if (element.vote_average) {
        total += (element.vote_average / 2) * 10;
      }
    });

    this.total = total;
    this.itemsList = [];
    this.payed = true;
  }

  cleanCartAction() {
    this.itemsList = [];
  }
}
