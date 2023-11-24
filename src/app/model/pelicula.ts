export class Pelicula {
    id: number;
    nombre: string;
    clasificacion: string;
    horario: string;
    imagen: string;

    constructor(id: number, nombre: string, clasificacion: string, horario: string, imagen: string){
        this.id = id;
        this.nombre = nombre;
        this.clasificacion = clasificacion;
        this.horario = horario;
        this.imagen = imagen;
    }

    public static crearCartelera(): Pelicula[] {
        let cartelera = [];
    
        let losJuegosDelHambre: Pelicula = new Pelicula(1, 'Los Juegos del Hambre', 'B15', "1:30, 3:30, 5:30, 7:30", "assets/imagenes/ljdh.jpg");
        cartelera.push(losJuegosDelHambre);
    
        let mib: Pelicula = new Pelicula(2, 'Hombres de Negro', 'A', "1:00, 3:00, 5:00, 7:00", "assets/imagenes/mib.jpg");
        cartelera.push(mib);
    
        let apocalipto: Pelicula = new Pelicula(3, 'Apocalipto', 'B15', "6:00, 8:00", "assets/imagenes/apoc.jpg");
        cartelera.push(apocalipto);
    
        let shrek: Pelicula = new Pelicula(4, 'Shrek', 'A', "1:00, 3:00, 5:00, 7:00", "assets/imagenes/shrek.jpg");
        cartelera.push(shrek);
    
        let matrix: Pelicula = new Pelicula(5, 'Matrix', 'C', "1:30, 3:30, 5:30, 7:30", "assets/imagenes/matrix.jpg");
        cartelera.push(matrix);
    
        let spiderman: Pelicula = new Pelicula(6, 'Spiderman', 'A', "1:00, 3:00, 5:00, 7:00", "assets/imagenes/spiderman.jpg");
        cartelera.push(spiderman);
    
        let batman: Pelicula = new Pelicula(7, 'Batman', 'B-15', "5:00, 7:00", "assets/imagenes/batman.jpg");
        cartelera.push(batman);
    
        let jurassic: Pelicula = new Pelicula(8, 'Jurassic Park', 'A', "2:00, 4:00, 6:00, 8:00", "assets/imagenes/jurassic.jpg");
        cartelera.push(jurassic);
    
        let robocop: Pelicula = new Pelicula(9, 'Robocop', 'C', "1:00, 3:00, 5:00, 7:00", "assets/imagenes/robocop.jpg");
        cartelera.push(robocop);
    
        let laEra: Pelicula = new Pelicula(10, 'La Era de Hielo', 'A', "1:30, 5:00, 7:30", "assets/imagenes/ledh.jpg");
        cartelera.push(laEra);
    
        return cartelera;
      }
}