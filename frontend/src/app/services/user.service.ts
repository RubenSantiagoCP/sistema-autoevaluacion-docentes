import { Injectable, PLATFORM_ID  } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { isPlatformBrowser } from '@angular/common'; 
import { Usuario } from '../../interfaces/sesion';
import { UsuarioDetallado } from '../../interfaces/usuarioDetallado';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  myApiUrl:string = "api/usuarios/";

  constructor(private http:HttpClient) { }

  getUser(id:number):Observable<any>{
    return this.http.get<any>(environment.myAppUrl+this.myApiUrl+id).pipe(
      catchError(this.handleError)
    )
  }

  getUsuarios():Observable<any>{
    return this.http.get<any>(environment.myAppUrl+this.myApiUrl).pipe(
      catchError(this.handleError)
    )
  }

  addUsuario(usuario:Usuario){
    return this.http.post(environment.myAppUrl+this.myApiUrl, usuario).pipe(
      catchError(this.handleError)
    )
  }

  editUsuario(usuario:Usuario){
    return this.http.put(environment.myAppUrl+this.myApiUrl+usuario.USU_ID, usuario).pipe(
      catchError(this.handleError)
    )
  }

  getUsuarioByIdentificacion(identificacion: number){
    return this.http.get<any>(environment.myAppUrl+this.myApiUrl+"ident/"+identificacion).pipe(
      catchError(this.handleError)
    )
  }

  getUserByType(type:number){
    return this.http.get<any>(environment.myAppUrl+this.myApiUrl+"type/"+type).pipe(
      catchError(this.handleError)
    )
  }

  updateEstadoUser(id?:number,usuario?:Usuario){
    return this.http.put(environment.myAppUrl+this.myApiUrl+"estado/"+id, usuario).pipe(
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
