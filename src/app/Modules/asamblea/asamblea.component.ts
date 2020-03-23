import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Services/datos.service';

@Component({
  selector: 'app-asamblea',
  templateUrl: './asamblea.component.html',
  styleUrls: ['./asamblea.component.css']
})
export class AsambleaComponent implements OnInit {

  autoriza = localStorage.getItem('autoriza');

  constructor(public Datos: DatosService) { }

  ngOnInit() { }

}
