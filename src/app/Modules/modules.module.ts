import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { RegistroApoderadoComponent } from './registro-apoderado/registro-apoderado.component';
import { PrincipalComponent } from './principal/principal.component';
import { AsambleaComponent } from './asamblea/asamblea.component';



@NgModule({
  declarations: [
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    RegistroApoderadoComponent,
    PrincipalComponent,
    AsambleaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class ModulesModule { }
