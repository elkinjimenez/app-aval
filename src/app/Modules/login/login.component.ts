import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Services/datos.service';
import { RespUsuario } from 'src/app/Models/resp-usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // VARIABLES
  botonIngresar = { texto: 'Ingresar', estado: false };
  documento = { numero: '1022332327', tipo: '', estado: true };
  numAccionista = { numero: 'GAVAL63722', estado: true };
  mensaje = { texto: '', color: '', estado: false };

  respuestaLogueo: RespUsuario;

  constructor(public Datos: DatosService) { }

  ngOnInit() { }

  valDocumento() {
    if (this.documento.numero !== '') {
      this.documento.estado = true;
    } else {
      this.documento.estado = false;
    }
    this.valIngreso();
  }

  valNumAccionista() {
    if (this.numAccionista.numero !== '') {
      this.numAccionista.estado = true;
    } else {
      this.numAccionista.estado = false;
    }
    this.valIngreso();
  }

  valIngreso() {
    if (this.documento.estado && this.numAccionista.estado && this.documento.tipo !== '') {
      this.botonIngresar.estado = true;
    } else {
      this.botonIngresar.estado = false;
    }
  }

  async ingresar() {
    this.botonIngresar.texto = 'Procesando...';
    const tip = this.documento.tipo;
    const num = this.documento.numero;
    const accion = this.numAccionista.numero;
    let respuesta: any;
    try {
      respuesta = await this.Datos.GetLogueo(tip, num, accion).toPromise();
      this.respuestaLogueo = respuesta;
      console.log(this.respuestaLogueo);
      if (this.respuestaLogueo.responseStatus.returnCode === '00') {
        this.mensaje = {
          estado: true,
          color: 'alert-success',
          texto: 'Bienvenido ' + this.respuestaLogueo.shareHolder.nombresApellidos + ', lo estamos direccionando a la asamblea.',
        };
        localStorage.setItem('pantalla', 'asamblea');
        localStorage.setItem('autoriza', this.respuestaLogueo.shareHolder.autoriza + '');
      } else {
        this.mensaje = {
          estado: true,
          color: 'alert-warning',
          texto: this.respuestaLogueo.responseStatus.menssage,
        };
        this.numAccionista = {
          numero: '',
          estado: false,
        };
        this.botonIngresar.texto = 'Nuevo intento';
        this.valIngreso();
      }
    } catch (e) {
      this.mensaje = {
        estado: true,
        color: 'alert-danger',
        texto: 'El servicio presenta errores. Por favor intente de nuevo.',
      }
      this.numAccionista = {
        numero: '',
        estado: false,
      };
      this.botonIngresar.texto = 'Nuevo intento';
      this.valIngreso();
    }
  }
}
