import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Userol } from '../../interfaces/userol';

@Injectable({
  providedIn: 'root'
})
export class UserolService {
  myApiUrl: string = "api/userol/";

  constructor(private http: HttpClient) { }

  saveUserol(userol: Userol){
    return this.http.post(environment.myAppUrl+this.myApiUrl, userol).pipe(
      catchError(this.handleError)
    )
  }

  getUserol(id:number):Observable<any>{
    return this.http.get<any>(environment.myAppUrl+this.myApiUrl+id).pipe(
      catchError(this.handleError)
    )
  }

  getUseRoles():Observable<any>{
    return this.http.get<any>(environment.myAppUrl+this.myApiUrl).pipe(
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
