import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ModuloAutoevComponent } from './modulo-autoev/modulo-autoev.component';
import { SelectCoordinadorComponent } from './select-coordinador/select-coordinador.component';
import { SelectPeriodoComponent } from './select-periodo/select-periodo.component';




@NgModule({
  declarations: [
    PrincipalComponent,
    NavbarComponent,
    InfoPersonalComponent,
    ReporteComponent,
    ModuloAutoevComponent,
    SelectCoordinadorComponent,
    SelectPeriodoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DecanoModule { }
