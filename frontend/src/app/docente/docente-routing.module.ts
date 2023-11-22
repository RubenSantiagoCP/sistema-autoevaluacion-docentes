import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { RealizarAutoevComponent } from './realizar-autoev/realizar-autoev.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'info', component: InfoPersonalComponent},
  {path: 'autoevaluacion', component: RealizarAutoevComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocenteRoutingModule { }
