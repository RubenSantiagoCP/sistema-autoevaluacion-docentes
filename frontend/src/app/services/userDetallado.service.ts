import { Injectable, PLATFORM_ID  } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { isPlatformBrowser } from '@angular/common';
import { UsuarioDetallado } from '../../interfaces/usuarioDetallado';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  myApiUrl:string = "api/usuarios/";

  constructor(private http:HttpClient) { }
  getUsuarioDetallado():Observable<any>{
    return this.http.get<any>(environment.myAppUrl+this.myApiUrl+"detallado/get").pipe(
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
