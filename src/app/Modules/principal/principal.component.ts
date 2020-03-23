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
    console.log(this.pantalla + ' yo');

    // setInterval(() => {
    //   this.pantalla = localStorage.getItem('pantalla');
    // }, 1000);

  }

  async estadoPantalla() {
    this.pantalla = localStorage.getItem('pantalla');
    if (this.pantalla !== '') {
      return true;
    } else {
      return false;
    }
  }
}
