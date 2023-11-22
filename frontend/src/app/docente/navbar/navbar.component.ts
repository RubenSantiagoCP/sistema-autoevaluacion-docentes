import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  notificaciones_active: boolean = false; 

  setNotificaciones(){
    this.notificaciones_active = !this.notificaciones_active; 
  }
}
