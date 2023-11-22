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
  
  constructor(@Inject(PLATFORM_ID) private platformId: any, private http: HttpClient) {
    if (isPlatformBrowser(this.platformId)) {
      // Solo ejecutar este código si estamos en un entorno de navegador
      this.currentUserLoginOn = new BehaviorSubject<boolean>(sessionStorage.getItem("token") !== null);
      this.currentUserData = new BehaviorSubject<string>(sessionStorage.getItem("token") || "");
    }
  }
/*
  constructor(private http: HttpClient) {
    this.currentUserLoginOn = new BehaviorSubject<boolean>(sessionStorage .getItem("token")!=null);
    this.currentUserData = new BehaviorSubject<string>(sessionStorage .getItem("token") || "");
  }
*/
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
    if(error.status===0){
      console.log("Se ha producido un error", error.error);
    }else{
      console.error("Backend retornó el código de estado ", error.status, error.error);
    }

    return throwError(()=> new Error("Algo falló. Por favor intente nuevamente"));
  }
}
