import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { InicioSesionComponent } from './usuario/inicio-sesion/inicio-sesion.component';
import { NotFoundComponent } from './usuario/not-found/not-found.component';
import { VigilanteCoordGuard } from './guards/vigilante-coord.guard';
import { VigilanteDocenteGuard } from './guards/vigilante-doc.guard';
import { VigilanteDecanoGuard } from './guards/vigilante-decano.guard';

const routes: Routes = [
  {path: '', component: InicioSesionComponent},
  {path: 'coordinador', loadChildren: () => import('./coordinador/coordinador.module').then(m=>m.CoordinadorModule), canActivate:[VigilanteCoordGuard]},
  {path: 'docente', loadChildren: () => import('./docente/docente.module').then(m=>m.DocenteModule), canActivate: [VigilanteDocenteGuard]},
  {path: 'decano', loadChildren: () => import('./decano/decano.module').then(m=>m.DecanoModule), canActivate: [VigilanteDecanoGuard]},
  {path: '**', component: NotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
