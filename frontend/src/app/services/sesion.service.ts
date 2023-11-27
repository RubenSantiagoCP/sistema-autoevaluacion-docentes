import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, tap, throwError} from 'rxjs';
import { Sesion } from '../../interfaces/sesion';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { isPlatformBrowser } from '@angular/common'; 
import jwt_decode from 'jsonwebtoken';



@Injectable({
  providedIn: 'root',
})
export class SesionService { 
  private myApiUrl = 'api/autenticacion/login';
  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean> (false);
  currentUserData: BehaviorSubject<string> = new BehaviorSubject<string> ("");
  currentUserDataFull: BehaviorSubject<any> = new BehaviorSubject<any> ({});
  // En la sección de variables del servicio
  credencialesIncorrectas: boolean = false;

  
  constructor(@Inject(PLATFORM_ID) private platformId: any, private http: HttpClient) {
    if (isPlatformBrowser(this.platformId)) {
      // Solo ejecutar este código si estamos en un entorno de navegador
      this.currentUserLoginOn = new BehaviorSubject<boolean>(sessionStorage.getItem("token") !== null);
      this.currentUserData = new BehaviorSubject<string>(sessionStorage.getItem("token") || "");
    }
  }

  login(username: string, password: string): Observable<any> {
    const credentials = { correo: username, contrasena: password };
    
   return this.http.post<any>(`${environment.myAppUrl}${this.myApiUrl}`, credentials).pipe(
      tap((userData)=> {
        sessionStorage.setItem("token", userData.token);
        this.currentUserData.next(userData.token);
        this.currentUserLoginOn.next(true);
      }),
      map((userData)=> userData.token),
      catchError(this.handleError)
    );
  }

  logout():void{
    sessionStorage.removeItem("token");
    this.currentUserLoginOn.next(false);
  }

  
  private handleError(error:HttpErrorResponse){
    console.log(error);
    if(error.status===0){
      console.log("Se ha producido un error", error.error);
    }else if(error.status===401){
      this.credencialesIncorrectas = true;
      console.log(error);
    }else{
      console.error("Backend retornó el código de estado ", error.status, error.error);
    }

    return throwError(()=> new Error("Algo falló. Por favor intente nuevamente"));
  }

  decodeToken(token: string): any {
    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) {
      console.error('Token no válido. No tiene el formato esperado.');
      return null;
    }

    const payload = atob(tokenParts[1]);
    return JSON.parse(payload);
  }
}
