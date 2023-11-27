import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RealizarAutoevComponent } from './realizar-autoev/realizar-autoev.component';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { SelecPeriodoComponent } from './selec-periodo/selec-periodo.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    InfoPersonalComponent,
    NavbarComponent,
    RealizarAutoevComponent,
    SelecPeriodoComponent
  ],
  imports: [
    CommonModule,
    DocenteRoutingModule,
    FormsModule,

  ],
  providers : [
    CookieService
  ]
})
export class DocenteModule { }
