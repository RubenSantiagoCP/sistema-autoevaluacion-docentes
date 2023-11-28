import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ModuloAutoevComponent } from './modulo-autoev/modulo-autoev.component';
import { SelecDocenteComponent } from './selec-docente/selec-docente.component';
import { GesDocenteComponent } from './ges-docente/ges-docente.component';
import { AeDocenteComponent } from './ae-docente/ae-docente.component';
import { PeriodoComponent } from './periodo/periodo.component';
import { FormsModule } from '@angular/forms';
import { AgregarItemsComponent } from './agregar-items/agregar-items.component';
import { ItemEvaluacionComponent } from './item-evaluacion/item-evaluacion.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { RevisarAutoComponent } from './revisar-auto/revisar-auto.component';
import { RevisarItemsComponent } from './revisar-items/revisar-items.component';
import { ReporteComponent } from './reporte/reporte.component';
import { InfoDocenteComponent } from './info-docente/info-docente.component';
import { VigilanteCoordGuard } from '../guards/vigilante-coord.guard';
import { GesPeriodoComponent } from './ges.periodo/ges.periodo.component';
import { RealizarAutoComponent } from './realizar-auto/realizar-auto.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent ,  canActivate:[VigilanteCoordGuard]},
  {path: 'info', component: InfoPersonalComponent,  canActivate:[VigilanteCoordGuard]},
  {path: 'modulo', component: ModuloAutoevComponent,  canActivate:[VigilanteCoordGuard]},
  {path: 'modulo/docente', component: SelecDocenteComponent,  canActivate:[VigilanteCoordGuard]},
  {path: 'modulo/docente/items', component: ItemEvaluacionComponent,  canActivate:[VigilanteCoordGuard]},
  {path: 'modulo/docente/items/add', component: AgregarItemsComponent,  canActivate:[VigilanteCoordGuard]},
  {path: 'docentes', component: GesDocenteComponent,  canActivate:[VigilanteCoordGuard]},
  {path: 'docentes/informacion', component: InfoDocenteComponent,  canActivate:[VigilanteCoordGuard]},
  {path: 'docentes/edit', component: AeDocenteComponent,  canActivate:[VigilanteCoordGuard]},
  {path: 'docentes/registrar', component: AeDocenteComponent,  canActivate:[VigilanteCoordGuard]},
  {path: 'periodos/periodo', component: PeriodoComponent,  canActivate:[VigilanteCoordGuard]},
  {path: 'periodos/edit/:id', component: PeriodoComponent,  canActivate:[VigilanteCoordGuard]},
  {path: 'reporte', component: ModuloAutoevComponent,  canActivate:[VigilanteCoordGuard]},
  {path: 'reporte/docentes', component: ReporteComponent,  canActivate:[VigilanteCoordGuard]},
  {path: 'revisar/items', component: RevisarAutoComponent,  canActivate:[VigilanteCoordGuard]},
  {path: 'revisar/items/item', component: RevisarItemsComponent,  canActivate:[VigilanteCoordGuard]},
  {path: 'revisar', component: ModuloAutoevComponent,  canActivate:[VigilanteCoordGuard]},
  {path: 'periodos', component: GesPeriodoComponent,  canActivate:[VigilanteCoordGuard]},
  {path: 'autoevaluacion', component: ModuloAutoevComponent,  canActivate:[VigilanteCoordGuard]},
  {path: 'autoevaluacion/realizar', component: RealizarAutoComponent,  canActivate:[VigilanteCoordGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule]
})
export class CoordinadorRoutingModule { }
