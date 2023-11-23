import { Component, OnInit } from '@angular/core';
import { SesionService } from '../../services/sesion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  notificaciones_active: boolean = false; 
  data_user?:any;

  constructor(private sesionService:SesionService, private router:Router){

  }

  setNotificaciones(){
    this.notificaciones_active = !this.notificaciones_active; 
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
  }
}
