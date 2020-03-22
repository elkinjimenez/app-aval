import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Modules/login/login.component';
import { AsambleaComponent } from './Modules/asamblea/asamblea.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'asamblea', component: AsambleaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
