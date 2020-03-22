import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Services/datos.service';
import { setInterval } from 'timers';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  pantalla: string;

  constructor(public Datos: DatosService) { }

  ngOnInit() {

    setInterval(() => {
      this.pantalla = localStorage.getItem('pantalla');
    }, 1000);

  }
}
