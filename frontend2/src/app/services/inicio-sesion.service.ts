import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {
  lstUsuarios = [
    { user: 'usuario1', password: 'contrasena1', type: 1},
    { user: 'usuario2', password: 'contrasena2', type: 1},
    { user: 'usuario3', password: 'contrasena3',  type: 1 },
    { user: 'usuario4', password: 'contrasena4', type: 1 },
    { user: 'usuario5', password: 'contrasena5', type: 1 },
    { user: 'usuario6', password: 'contrasena6', type: 1 },
    { user: 'coord', password: '12345', type: 2 },
    { user: 'decano', password: '12345', type: 3 },
    { user: 'usuario9', password: 'contrasena9', type: 1 },
    { user: 'usuario10', password: 'contrasena10', type: 1 },
  ];

  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient){
    this.myAppUrl =  '';
    this.myApiUrl = 'api/login';
  }

    verificarCredenciales(usuario: string, password: string){
      const usuarioEncontrado = this.lstUsuarios.find(
        (u) => u.user === usuario && u.password === password
      );
    
      if (usuarioEncontrado) {
        return usuarioEncontrado.type;
      } else {
        return -1;
      }
  }
  
}
