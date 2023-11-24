import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  asuntoRecibido(form: any){
    console.log('De: ' + form.nombre.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" "));
    console.log('Correo: ' + form.correo);
    console.log('Asunto: ' + form.asunto.toUpperCase());
  }
}
