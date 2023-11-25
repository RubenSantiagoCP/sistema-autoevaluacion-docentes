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
import { GesPeriodoComponent } from './ges.periodo/ges.periodo.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'info', component: InfoPersonalComponent},
  {path: 'modulo', component: ModuloAutoevComponent},
  {path: 'modulo/docente', component: SelecDocenteComponent},
  {path: 'modulo/docente/items', component: ItemEvaluacionComponent},
  {path: 'modulo/docente/items/add', component: AgregarItemsComponent},
  {path: 'docentes', component: GesDocenteComponent},
  {path: 'docentes/edit/:id', component: AeDocenteComponent},
  {path: 'docentes/registrar', component: AeDocenteComponent},
  {path: 'periodos/periodo', component: PeriodoComponent},
  {path: 'periodos/edit/:id', component: PeriodoComponent},
  {path: 'reporte', component: ReporteComponent},
  {path: 'revisar', component: RevisarAutoComponent},
  {path: 'revisar/items', component: RevisarItemsComponent},
  {path: 'periodos', component: GesPeriodoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule]
})
export class CoordinadorRoutingModule { }
