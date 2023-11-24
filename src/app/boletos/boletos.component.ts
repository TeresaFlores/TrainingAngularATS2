import { Component } from '@angular/core';
import { Pelicula } from '../model/pelicula';

@Component({
  selector: 'app-boletos',
  templateUrl: './boletos.component.html',
  styleUrls: ['./boletos.component.css']
})
export class BoletosComponent {
  peliculas: Pelicula[] = Pelicula.crearCartelera();
  peliculaSeleccionada: Pelicula = new Pelicula(0, "", "", "", "");
  horarios: string[] = [""];
  horarioseleccionado: string = "";
  numeroBoletos: number = 0;
  totalAPagar: number = 0;

  peliculaSeleccion(target: any) {
    this.peliculaSeleccionada = this.peliculas[target.value - 1];
    console.log('Hay que comprar boletos para ' + this.peliculaSeleccionada.nombre);
    this.horarios = this.peliculaSeleccionada.horario.split(", ");
    this.horarioseleccionado = "";
    this.numeroBoletos = 0;
    this.totalAPagar = 0;
  }

  horarioSeleccion(target: any) {
    this.horarioseleccionado = target.value;
    console.log('Hay que comprar boletos para ' + this.peliculaSeleccionada.nombre);
    console.log('En este horario ' + this.horarioseleccionado);
    this.numeroBoletos = 0;
    this.totalAPagar = 0;
  }

  boletosSeleccion(target: any) {
    this.numeroBoletos = target.value;
    this.totalAPagar = this.numeroBoletos * 75;
    console.log('Hay que comprar boletos para ' + this.peliculaSeleccionada.nombre);
    console.log('En este horario ' + this.horarioseleccionado);
    console.log('Esta cantidad de boletos ' + this.numeroBoletos);
    console.log('Precio total ' + this.totalAPagar);
  }

  botonAbilitado() {
    if(this.totalAPagar == 0){
      return true;
    }else{
      return false;
    }
  }

  pagar(){
console.log("Se compraron " + this.numeroBoletos + " boletos para la pelicula \"" + this.peliculaSeleccionada.nombre + "\" en el horario de las " + this.horarioseleccionado + " con un costo taotal de $" + this.totalAPagar + " MN")
  }
}
