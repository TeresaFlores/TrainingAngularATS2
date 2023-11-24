import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactoService } from './contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers: [ContactoService]
})

export class ContactoComponent implements OnInit {
  formContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required]),
    asunto: new FormControl('', [Validators.required])
  });

  constructor(public servicioContacto : ContactoService){}

  ngOnInit(): void {
    console.log('valor al iniciar de formContacto' + this.formContacto.value);
  }

  onSubmit(){
    this.servicioContacto.asuntoRecibido(this.formContacto.value);
  }
}
