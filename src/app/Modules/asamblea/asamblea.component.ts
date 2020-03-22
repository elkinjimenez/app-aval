import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Services/datos.service';

@Component({
  selector: 'app-asamblea',
  templateUrl: './asamblea.component.html',
  styleUrls: ['./asamblea.component.css']
})
export class AsambleaComponent implements OnInit {

  item: string;

  constructor(public Datos: DatosService) { }

  ngOnInit() { }

}
