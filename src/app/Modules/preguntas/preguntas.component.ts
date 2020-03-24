import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Services/datos.service';
import { RespPregunta } from 'src/app/Models/resp-pregunta';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  preguntas = localStorage.getItem('preguntas');
  autoriza = localStorage.getItem('autoriza');

  preguntaMostrar = { num: '', descripcion: '' };
  mensaje = { mensaje: '', color: '', estado: false };

  respuestaPreguntas = [] as RespPregunta[];
  listadoPreguntas = [] as RespPregunta[];

  usuarios = ['1', '2', '3', '4', '5', '6', '7'];

  constructor(private Datos: DatosService) { }

  ngOnInit() {
    this.listaPreguntas();
  }

  async listaPreguntas() {
    let respuesta: any;
    try {
      respuesta = await this.Datos.GetQuestion().toPromise();
      this.respuestaPreguntas = respuesta;
      this.preguntasActivas();
    } catch (e) {
      this.mensaje = {
        mensaje: 'Error en la consulta de las preguntas. Recargue o consulte con el administrador.',
        color: 'alert-danger',
        estado: true,
      };
    }
  }

  preguntasActivas() {
    this.listadoPreguntas = this.respuestaPreguntas.filter(
      pregunta =>
        pregunta.estado === 'A'
    );
    this.mostrarPregunta();
  }

  mostrarPregunta() {
    let pregunta = {} as RespPregunta;
    if (this.listadoPreguntas.length > 0) {
      pregunta = this.listadoPreguntas[this.listadoPreguntas.length - 1];
      this.preguntaMostrar = {
        num: pregunta.pregunta,
        descripcion: pregunta.descPregunta,
      };
    }
  }

}
