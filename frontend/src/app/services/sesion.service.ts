import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sesion } from '../../interfaces/sesion'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SesionService {
  private myAppUrl = 'http://localhost:3000/'; // La URL del backend 
  private myApiUrl = 'api/autenticacion/login';
  
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<Sesion> {
    const credentials = { correo: username, contrasena: password };
    
    return this.http.post<Sesion>(`${this.myAppUrl}${this.myApiUrl}`, credentials);
  }
}