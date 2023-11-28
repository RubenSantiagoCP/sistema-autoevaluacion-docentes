import { Component, OnInit } from '@angular/core';
import { SesionService } from '../../services/sesion.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NotificacionService } from '../../services/notificacion.service';
import { Usunot } from '../../../interfaces/usunot';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  notificaciones_active: boolean = false; 
  data_user?:any = '';
  notificaciones:any[] = [];

  constructor(private sesionService:SesionService, private router:Router, private cookieService:CookieService, private notificacionService:NotificacionService){
    this.ngOnInit();
    this.cargarNotificaciones();
  }
  cargarNotificaciones(){
    let id = this.data_user.id;
    this.notificacionService.getnotificacionesbyid(id
      ).subscribe({
      next: (notificaciones) => {this.notificaciones = notificaciones;console.log(notificaciones);},
      error: (error) => console.error('Error al obtener notificaciones', error)
    });
    
  }
  

  setNotificaciones(){
    this.notificaciones_active = !this.notificaciones_active; 
    this.cargarNotificaciones();
  }

  ngOnInit(){
    this.sesionService.currentUserData.subscribe({
      next: (UserData) =>{
        this.data_user = this.sesionService.decodeToken(UserData);
      }
    })
  }

  logout()
  {
    this.sesionService.logout();
    this.router.navigate(["/"]);
    this.cookieService.delete('token_access', '/');
    this.cookieService.deleteAll();
  }
}
