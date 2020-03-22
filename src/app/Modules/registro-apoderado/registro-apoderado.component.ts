import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Services/datos.service';

@Component({
  selector: 'app-registro-apoderado',
  templateUrl: './registro-apoderado.component.html',
  styleUrls: ['./registro-apoderado.component.css']
})
export class RegistroApoderadoComponent implements OnInit {

  registrado = false;

  botonRegistrar = { texto: 'Registrar', estado: false };
  documento = { numero: '', tipo: '', estado: false };
  nombres = { nombres: '', estado: false };

  constructor(public Datos: DatosService) { }

  ngOnInit() { }

  valDocumento() {
    if (this.documento.numero !== '') {
      this.documento.estado = true;
    } else {
      this.documento.estado = false;
    }
    this.valRegistro();
  }

  valNombres() {
    if (this.nombres.nombres !== '') {
      this.nombres.estado = true;
    } else {
      this.nombres.estado = false;
    }
    this.valRegistro();
  }

  valRegistro() {
    if (this.documento.estado && this.documento.tipo !== '') {
      this.botonRegistrar.estado = true;
    } else {
      this.botonRegistrar.estado = false;
    }
  }

  ingresar() {
    this.registrado = true;
  }
}
