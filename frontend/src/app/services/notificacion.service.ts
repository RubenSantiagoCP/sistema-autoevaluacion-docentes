import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserNotificacion, Usunot } from '../../interfaces/usunot';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  constructor(private http: HttpClient) { }
  myApiUrl:string = "api/notificaciones/";

  getnotificaciones():Observable<any>{
    return this.http.get<any>(environment.myAppUrl+this.myApiUrl+'get').pipe(
      catchError(this.handleError)
    )
  }
  getnotificacionesbyid(id:number):Observable<any>{
    return this.http.get<any>(environment.myAppUrl+this.myApiUrl+id).pipe(
      catchError(this.handleError)
    )
  }
  createNotificacion(notificacion?: Usunot){
    return this.http.post(environment.myAppUrl+this.myApiUrl, notificacion).pipe(
      catchError(this.handleError)
    )
  }
  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.log("Se ha producido un error", error.error);
    }else{
      console.error("Backend retornó el código de estado ", error);
    }

    return throwError(()=> new Error("Algo falló. Por favor intente nuevamente"));
  }
}

