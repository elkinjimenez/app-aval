import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Services/datos.service';
import { RespPregunta } from 'src/app/Models/resp-pregunta';
import { ReqRespuesta } from 'src/app/Models/req-respuesta';
import { RespIp } from 'src/app/Models/resp-ip';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  preguntas = localStorage.getItem('preguntas');
  autoriza = localStorage.getItem('autoriza');
  preguntaResuelta = localStorage.getItem('preguntaResuelta');
  actionsAttorney = JSON.parse(localStorage.getItem('actionsAttorney'));
  listaRespuestas = JSON.parse(localStorage.getItem('actionsAttorney'));

  preguntaMostrar = { num: '', descripcion: '' };
  mensaje = { mensaje: '', color: '', estado: false };
  botonRespuestas = { text: 'Enviar respuestas', estado: true };

  respuestaPreguntas = [] as RespPregunta[];
  listadoPreguntas = [] as RespPregunta[];
  respuestaIP: RespIp;

  constructor(private Datos: DatosService) { }

  ngOnInit() {
    this.listaPreguntas();

    setInterval(() => {
      this.listaPreguntas();
    }, 30000);
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
      if (this.preguntas.includes(',' + pregunta.pregunta + ',')) {
        this.preguntaMostrar = {
          num: pregunta.pregunta,
          descripcion: pregunta.descPregunta,
        };
      } else {
        this.preguntaMostrar = {
          num: '',
          descripcion: '',
        };
      }

    }
  }

  multipleSi() {
    for (let i = 0; i < this.listaRespuestas.length; i++) {
      this.listaRespuestas[i] = 'aprobado';
    }
  }

  multipleNo() {
    for (let i = 0; i < this.listaRespuestas.length; i++) {
      this.listaRespuestas[i] = 'no aprobado';
    }
  }

  multipleX() {
    for (let i = 0; i < this.listaRespuestas.length; i++) {
      this.listaRespuestas[i] = 'me abstengo';
    }
  }

  async enviarRespuestas() {
    this.botonRespuestas = {
      text: 'Enviando...',
      estado: false,
    };
    if (this.listaRespuestas.length === this.actionsAttorney.length) {
      let IP: any;
      const dateobj = new Date();
      const B = dateobj.toISOString();
      try {
        IP = await this.Datos.GetIP().toPromise();
        this.respuestaIP = IP;
      } catch (e) { this.respuestaIP = { ip: '0.0.0.0' }; }

      for (let i = 0; i < this.listaRespuestas.length; i++) {
        const body = {
          fecRespuesta: B,
          id: 0,
          idPregunta: this.preguntaMostrar.num,
          ipRespuesta: this.respuestaIP.ip,
          numeroAccion: this.actionsAttorney[i],
          observacion: 'na',
          respuesta: this.listaRespuestas[i],
        } as ReqRespuesta;
        try {
          let respuesta: any;
          // respuesta = await this.Datos.PostRespuesta(body);
          respuesta = this.Datos.PostRespuesta(body);
          this.preguntaResuelta = this.preguntaMostrar.num;
          localStorage.setItem('preguntaResuelta', this.preguntaMostrar.num);
          this.mensaje = {
            mensaje: 'Respuestas enviadas correctamente, pronto estará la nueva pregunta.',
            color: 'alert-success',
            estado: true,
          };
        } catch (e) {
          this.mensaje = {
            mensaje: 'Las respuestas no pudieron ser enviadas correctamente. por favor consulte con el administrador.',
            color: 'alert-danger',
            estado: true,
          };
        }
      }
      setTimeout(() => {
        this.mensaje.estado = false;
      }, 8000);
    }
    this.botonRespuestas = {
      text: 'Enviar respuestas',
      estado: true,
    };
  }
}
