import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespUsuario } from '../Models/resp-usuario';
import { ReqRespuesta } from '../Models/req-respuesta';
import { RespIp } from '../Models/resp-ip';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private tiposDocumento: any;

  // RESPUESTAS
  private respuestaIP: RespIp;
  private requestRespuesta: ReqRespuesta;

  constructor(private http: HttpClient) { }

  GetLogueo(tip: string, num: string, accion: string) {
    const URL = 'https://wsasableaaval.herokuapp.com/api/shareHolder/' + tip + '/' + num + '/' + accion;
    return this.http.get(URL);
  }

  GetQuestion() {
    const URL = 'https://wsasableaaval.herokuapp.com/api/AssemblyQuestion';
    return this.http.get(URL);
  }

  PostRespuesta(body: ReqRespuesta) {
    const URL = 'https://wsasableaaval.herokuapp.com/api/QuestionXAction';
    return this.http.post(URL, body).subscribe(data => console.log(data), error => console.log(error));
  }

  GetIP() {
    return this.http.get('https://api.ipify.org?format=json');
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
