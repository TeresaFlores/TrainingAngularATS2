import { Component } from '@angular/core';
import { Pelicula } from '../model/pelicula';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  peliculas: Pelicula[] = Pelicula.crearCartelera();

  comprar(id: number) {
    console.log('Hay que comprar boletos para ' + this.peliculas[id -1].nombre);
  }
}