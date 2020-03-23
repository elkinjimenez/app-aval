import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Modules/login/login.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './Modules/footer/footer.component';
import { NavbarComponent } from './Modules/navbar/navbar.component';
import { RegistroApoderadoComponent } from './Modules/registro-apoderado/registro-apoderado.component';
import { PrincipalComponent } from './Modules/principal/principal.component';
import { AsambleaComponent } from './Modules/asamblea/asamblea.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    RegistroApoderadoComponent,
    PrincipalComponent,
    AsambleaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
