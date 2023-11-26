import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Periodo } from '../../interfaces/periodo';

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {
  periodoSeleccionado?: Periodo;

 // private myAppUrl
  myApiUrl:string = "api/periodos/";
  constructor(private http:HttpClient) { }

  getPeriodo(id:number):Observable<any>{
    return this.http.get<any>(environment.myAppUrl+this.myApiUrl+id).pipe(
      catchError(this.handleError)
    )
  }

  getPeriodoId(id:number):Observable<Periodo>{
    return this.http.get<Periodo>(environment.myAppUrl+this.myApiUrl+id).pipe(
      catchError(this.handleError)
    )
  }

  getPeriodos():Observable<any>{
    return this.http.get<any>(environment.myAppUrl+this.myApiUrl).pipe(
      catchError(this.handleError)
    )
  }

  updatePeriodo(id: number, periodo: Periodo): Observable<void>{
    return this.http.put<void>(environment.myAppUrl+this.myApiUrl+id, periodo).pipe(
      catchError(this.handleError)
    )
  }

  addPeriodo(periodo:Periodo){
    console.log(periodo);
    return this.http.post(environment.myAppUrl+this.myApiUrl, periodo).pipe(
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

  getPeriodoSeleccionado(){
    return this.periodoSeleccionado;
  }

  setPeriodoSeleccionado(periodo?: Periodo){
    this.periodoSeleccionado = periodo;
  } 
}
