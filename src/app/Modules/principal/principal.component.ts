import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Services/datos.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  pantalla = localStorage.getItem('pantalla');

  constructor(public Datos: DatosService) { }

  ngOnInit() {

    setInterval(() => {
      this.pantalla = localStorage.getItem('pantalla');
    }, 1000);

  }
}
