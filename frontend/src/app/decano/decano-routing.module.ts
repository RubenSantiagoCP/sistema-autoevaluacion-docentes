import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { VigilanteDecanoGuard } from '../guards/vigilante-decano.guard';
import { SelectCoordinadorComponent } from './select-coordinador/select-coordinador.component';
import { ItemsComponent } from './items/items.component';
import { AgregarItemsComponent } from './agregar-items/agregar-items.component';
import { ReporteComponent } from './reporte/reporte.component';
import { RevisarAutoComponent } from './revisar-auto/revisar-auto.component';
import { RevisarItemsComponent } from './revisar-items/revisar-items.component';
import { SelectPeriodoComponent } from './select-periodo/select-periodo.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent ,  canActivate:[VigilanteDecanoGuard]},
  {path: 'info', component: InfoPersonalComponent,  canActivate:[VigilanteDecanoGuard]},
  {path: 'modulo', component: SelectPeriodoComponent,  canActivate:[VigilanteDecanoGuard]},
  {path: 'modulo/coordinador', component: SelectCoordinadorComponent,  canActivate:[VigilanteDecanoGuard]},
  {path: 'modulo/coordinador/items', component: ItemsComponent,  canActivate:[VigilanteDecanoGuard]},
  {path: 'modulo/coordinador/items/add', component: AgregarItemsComponent,  canActivate:[VigilanteDecanoGuard]},
  {path: 'reporte', component: SelectPeriodoComponent,  canActivate:[VigilanteDecanoGuard]},
  {path: 'reporte/items', component: ReporteComponent,  canActivate:[VigilanteDecanoGuard]},
  {path: 'revisar/items', component: RevisarAutoComponent,  canActivate:[VigilanteDecanoGuard]},
  {path: 'revisar/items/item', component: RevisarItemsComponent,  canActivate:[VigilanteDecanoGuard]},
  {path: 'revisar', component: SelectPeriodoComponent,  canActivate:[VigilanteDecanoGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecanoRoutingModule { }
