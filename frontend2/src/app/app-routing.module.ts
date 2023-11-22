import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { InicioSesionComponent } from './usuario/inicio-sesion/inicio-sesion.component';
import { NotFoundComponent } from './usuario/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: InicioSesionComponent},
  {path: 'coordinador', loadChildren: () => import('./coordinador/coordinador.module').then(m=>m.CoordinadorModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
