import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario = localStorage.getItem('usuario');

  constructor() { }

  ngOnInit() {
  }

  asamblea() {
    localStorage.setItem('pantalla', 'asamblea');
  }

  inicio() {
    localStorage.setItem('pantalla', '');
    localStorage.setItem('preguntas', '');
    localStorage.setItem('actionsAttorney', '');
    localStorage.setItem('preguntaResuelta', '');
    localStorage.setItem('autoriza', '');
    localStorage.setItem('usuario', '');
  }

  cerrar() {
    localStorage.setItem('preguntas', '');
    localStorage.setItem('actionsAttorney', '');
    localStorage.setItem('preguntaResuelta', '');
    localStorage.setItem('autoriza', '');
    localStorage.setItem('pantalla', '');
    localStorage.setItem('usuario', '');
  }

  async estadoUsuario() {
    this.usuario = localStorage.getItem('usuario');
    if (this.usuario !== '') {
      return true;
    } else {
      return false;
    }
  }

}
