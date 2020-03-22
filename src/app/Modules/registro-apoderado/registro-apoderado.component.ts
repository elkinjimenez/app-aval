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
  correo = { correo: '', color: '', mensaje: '', estado: false };
  poder = { poder: '', estado: false };
  autorizacion = { estado: false };

  constructor(public Datos: DatosService) { }

  ngOnInit() { }

  valNombres() {
    if (this.nombres.nombres !== '') {
      this.nombres.estado = true;
    } else { this.nombres.estado = false; }
    this.valRegistro();
  }

  valDocumento() {
    if (this.documento.numero !== '' && this.documento.tipo !== '') {
      this.documento.estado = true;
    } else { this.documento.estado = false; }
    this.valRegistro();
  }

  valCorreo() {
    const regexpEmail = RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}$');
    if (regexpEmail.test(this.correo.correo)) {
      this.correo.mensaje = 'Correo electrónico válido';
      this.correo.color = 'text-success';
      this.correo.estado = true;
    } else {
      this.correo.mensaje = 'Correo electrónico no válido';
      this.correo.color = 'text-danger';
      this.correo.estado = false;
    }
    this.valRegistro();
  }

  valPoder() {
    this.poder.estado = true;
    this.valRegistro();
  }

  limpiarPoder() {
    this.poder.estado = false;
    this.valRegistro();
  }

  valRegistro() {
    if (this.documento.estado && this.nombres.estado && this.correo.estado && this.poder.estado && this.autorizacion.estado) {
      this.botonRegistrar.estado = true;
    } else { this.botonRegistrar.estado = false; }
  }

  registrar() {
    this.botonRegistrar.texto = 'Procesando...';
    this.registrado = true;
  }
}
