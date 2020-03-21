import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [LoginComponent, FooterComponent, NavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class ModulesModule { }
