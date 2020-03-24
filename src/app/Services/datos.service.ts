import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespUsuario } from '../Models/resp-usuario';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private tiposDocumento: any;

  // RESPUESTAS
  private respuestaIP: { ip: string };

  constructor(private http: HttpClient) { }

  GetLogueo(tip: string, num: string, accion: string) {
    const URL = 'https://wsasableaaval.herokuapp.com/api/shareHolder/' + tip + '/' + num + '/' + accion;
    return this.http.get(URL);
  }

  GetQuestion() {
    const URL = 'https://wsasableaaval.herokuapp.com/api/AssemblyQuestion';
    return this.http.get(URL);
  }

  GetIP() {
    this.http.get('https://api.ipify.org?format=json').subscribe(
      datos => {
        this.respuestaIP = JSON.parse(JSON.stringify(datos));
        console.log(this.respuestaIP.ip);
      });
  }



  GetTiposDocumento() {
    this.tiposDocumento = [
      { id: 'cc', nombre: 'Cédula de ciudadanía' },
      { id: 'ce', nombre: 'Cédula de extranjería' },
      { id: 'nit', nombre: 'NIT' },
      { id: 'ps', nombre: 'Pasaporte' },
    ];
    return this.tiposDocumento;
  }
}
