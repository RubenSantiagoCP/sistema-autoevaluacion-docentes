import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinadorRoutingModule } from './coordinador-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModuloAutoevComponent } from './modulo-autoev/modulo-autoev.component';
import {SelecDocenteComponent} from './selec-docente/selec-docente.component';
import { AgregarItemsComponent } from './agregar-items/agregar-items.component';
import { AeDocenteComponent } from './ae-docente/ae-docente.component';
import { GesDocenteComponent } from './ges-docente/ges-docente.component'
import { PeriodoComponent } from './periodo/periodo.component';
import { FilterByNombrePipe } from './selec-docente/FilterByNombrePipe';
import { FormsModule } from '@angular/forms';
import { ItemEvaluacionComponent } from './item-evaluacion/item-evaluacion.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RevisarAutoComponent } from './revisar-auto/revisar-auto.component';
import { RevisarItemsComponent } from './revisar-items/revisar-items.component';
import { AppModule } from '../app.module';
import { ReporteComponent } from './reporte/reporte.component';
import { FilterByNombreLabor } from './agregar-items/FilterByNameLabor';
import { InfoDocenteComponent } from './info-docente/info-docente.component';
import { GesPeriodoComponent } from './ges.periodo/ges.periodo.component';
import { FilterByTipoLabor } from './agregar-items/FilterByTipyeLabor';
import { RealizarAutoComponent } from './realizar-auto/realizar-auto.component';
@NgModule({
  declarations: [
    PrincipalComponent,
    NavbarComponent,
    ModuloAutoevComponent,
    SelecDocenteComponent,
    AgregarItemsComponent,
    AeDocenteComponent,
    GesDocenteComponent,
    PeriodoComponent,
    FilterByNombrePipe,
    ItemEvaluacionComponent,
    InfoPersonalComponent,
    RevisarAutoComponent,
    RevisarItemsComponent,
    ReporteComponent,
    FilterByNombreLabor,
    InfoDocenteComponent,
    GesPeriodoComponent,
    FilterByTipoLabor,
    RealizarAutoComponent
  ],
  imports: [
    CommonModule,
    CoordinadorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    
  ]
})
export class CoordinadorModule { }
