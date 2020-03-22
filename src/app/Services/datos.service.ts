import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private tiposDocumento: any;

  constructor() { }

  GetTiposDocumento() {
    this.tiposDocumento = [
      { id: '1', nombre: 'Cédula de ciudadanía' },
      { id: '2', nombre: 'Cédula de extrnajería' },
      { id: '3', nombre: 'NIT' },
      { id: '4', nombre: 'Pasaporte' },
    ];
    return this.tiposDocumento;
  }
}
