import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  // ----------------- VARIABLES
  tiposDocumento: any;

  constructor() { }

  // ------------------ LLENANDO DATOS

  TiposDocumento() {
    this.tiposDocumento = [
      { id: '1', nombre: 'Cédula de ciudadanía' },
      { id: '2', nombre: 'Cédula de extrnajería' },
      { id: '3', nombre: 'NIT' },
      { id: '4', nombre: 'Pasaporte' },
    ];
    return this.tiposDocumento;
  }

}
