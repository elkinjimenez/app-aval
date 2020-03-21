import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // VARIABLES
  tiposDocumento = [{ id: '', nombre: '' }];
  botonIngresar = { texto: 'Ingresar', estado: false };
  documento = { numero: '', tipo: '', estado: false };
  numAccionista = { numero: '', estado: false };

  constructor() { }

  ngOnInit() {
    this.llenarTiposDoc();
  }

  llenarTiposDoc() {
    this.tiposDocumento = [
      { id: '1', nombre: 'Cédula de ciudadanía' },
      { id: '2', nombre: 'Cédula de extrnajería' },
      { id: '3', nombre: 'NIT' },
      { id: '4', nombre: 'Pasaporte' },
    ];
  }

  valDocumento() {
    if (this.documento.numero !== '') {
      this.documento.estado = true;
    } else {
      this.documento.estado = false;
    }
    // VALIDAR INGRESO
    this.valIngreso();
  }

  valNumAccionista() {
    if (this.numAccionista.numero !== '') {
      this.numAccionista.estado = true;
    } else {
      this.numAccionista.estado = false;
    }
    // VALIDAR INGRESO
    this.valIngreso();
  }

  valIngreso() {
    if (this.documento.estado && this.numAccionista.estado && this.documento.tipo !== '') {
      this.botonIngresar.estado = true;
    } else {
      this.botonIngresar.estado = false;
    }
  }

}
