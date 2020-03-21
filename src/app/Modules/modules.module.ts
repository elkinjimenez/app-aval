import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [LoginComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ModulesModule { }
