import { Component } from '@angular/core';
import { DatosService } from './Services/datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app-aval';

  constructor(private Datos: DatosService) { }
}
