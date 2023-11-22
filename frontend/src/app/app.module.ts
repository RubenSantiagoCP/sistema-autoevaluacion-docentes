import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './usuario/inicio-sesion/inicio-sesion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './usuario/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http'; // Para las peticiones http
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './docente/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      //preventDuplicates: true, colocarla si se quiere que se muestre un unico mensaje por muchos docentes desactivados
    })
  ],

  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
