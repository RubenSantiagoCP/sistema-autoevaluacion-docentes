import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { RealizarAutoevComponent } from './realizar-autoev/realizar-autoev.component';
import { VigilanteDocenteGuard } from '../guards/vigilante-doc.guard';

const routes: Routes = [
  {path: '', component: PrincipalComponent, canActivate: [VigilanteDocenteGuard]},
  {path: 'info', component: InfoPersonalComponent, canActivate: [VigilanteDocenteGuard]},
  {path: 'autoevaluacion', component: RealizarAutoevComponent, canActivate: [VigilanteDocenteGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocenteRoutingModule { }
