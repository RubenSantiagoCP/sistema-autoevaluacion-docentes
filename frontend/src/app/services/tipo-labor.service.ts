import { Injectable } from '@angular/core';
import { TipoLabor } from '../../interfaces/tipoLabor';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoLaborService {

  lstTipoLabores: TipoLabor[] = [];
  // private myAppUrl
  myApiUrl: string = 'api/tipolabores/';
  constructor(private http: HttpClient) {}

  getTipoLabores(): Observable<any> {
    return this.http
      .get<any>(environment.myAppUrl + this.myApiUrl)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log('Se ha producido un error', error.error);
    } else {
      console.error('Backend retornó el código de estado ', error);
    }

    return throwError(
      () => new Error('Algo falló. Por favor intente nuevamente')
    );
  }
}
