import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { ReporteComponent } from './reporte/reporte.component';
import { SelectCoordinadorComponent } from './select-coordinador/select-coordinador.component';
import { SelectPeriodoComponent } from './select-periodo/select-periodo.component';
import { ItemsComponent } from './items/items.component';
import { AgregarItemsComponent } from './agregar-items/agregar-items.component';
import { RevisarAutoComponent } from './revisar-auto/revisar-auto.component';
import { RevisarItemsComponent } from './revisar-items/revisar-items.component';
import { DecanoRoutingModule } from './decano-routing.module';
import { FilterByNombreLabor } from './agregar-items/FilterByNombreLabor';
import { FilterByTipoLabor } from './agregar-items/FilterByTipoLabor';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PrincipalComponent,
    NavbarComponent,
    InfoPersonalComponent,
    ReporteComponent,
    SelectCoordinadorComponent,
    SelectPeriodoComponent,
    ItemsComponent,
    AgregarItemsComponent,
    RevisarAutoComponent,
    RevisarItemsComponent,
    FilterByNombreLabor,
    FilterByTipoLabor
  ], 
  imports: [
    CommonModule,
    DecanoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DecanoModule { }
