import { Injectable } from '@angular/core';
import { DocenteService } from './docente.service';
import { PeriodoService } from './periodo.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Evaluacion } from '../../interfaces/evaluacion';
import { UserolService } from './userol.service';
import { LaborService } from './labor.service';
import { TipoLaborService } from './tipo-labor.service';
import { Labor } from '../../interfaces/labor';
import { Usuario } from '../../interfaces/sesion';
import { Userol } from '../../interfaces/userol';
import { UserService } from './user.service';
import { Reporte } from '../../interfaces/reporte';

@Injectable({
  providedIn: 'root',
})
export class EvaluacionService {
  myApiUrl: string = 'api/evaluaciones/';
  laborSeleccionada?: Labor;

  constructor(
    private http: HttpClient,
    private docenteService: DocenteService,
    private periodoService: PeriodoService,
    private usuRol: UserolService,
    private laborService: LaborService,
    private tipoLaborService: TipoLaborService,
    private usuarioService: UserService
  ) {}

  getEvaluacion(id: number): Observable<any> {
    return this.http
      .get<any>(environment.myAppUrl + this.myApiUrl + id)
      .pipe(catchError(this.handleError));
  }

  deleteEvaluacion(id?: number): Observable<any> {
    return this.http
      .delete<any>(environment.myAppUrl + this.myApiUrl + id)
      .pipe(catchError(this.handleError));
  }

  getEvaluaciones(): Observable<any> {
    return this.http
      .get<any>(environment.myAppUrl + this.myApiUrl)
      .pipe(catchError(this.handleError));
  }

  addEvaluacion(evaluacion: Evaluacion) {
    return this.http
      .post(environment.myAppUrl + this.myApiUrl, evaluacion)
      .pipe(catchError(this.handleError));
  }

  editEvaluacion(evaluacion: Evaluacion) {
    return this.http
      .put(environment.myAppUrl + this.myApiUrl + evaluacion.EVA_ID, evaluacion)
      .pipe(catchError(this.handleError));
  }

  getEvaluacionesPeriodo(userol?:number, periodo?:number){
    return this.http
    .get<any>(environment.myAppUrl + this.myApiUrl+periodo+"/"+userol)
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

  getPeriodo() {
    return this.periodoService.getPeriodoSeleccionado();
  }

  getDocente() {
    return this.docenteService.getDocenteSeleccionado();
  }

  getLstLabores() {
    return this.laborService.getLabores();
  }

  getLstTipoLabores() {
    return this.tipoLaborService.getTipoLabores();
  }

  getLstUserol() {
    return this.usuRol.getUseRoles();
  }

  setLaborSellecionada(labor: Labor) {
    this.laborSeleccionada = labor;
  }

  getLaborSeleccionada() {
    return this.laborSeleccionada;
  }

  getUseRolSeleccionado() {
    return this.docenteService.getUseRolSelecionado();
  }

  getEvaluacionDocente(userol?: number) {
    return this.http
      .get<any>(environment.myAppUrl + this.myApiUrl + 'userol/' + userol)
      .pipe(catchError(this.handleError));
  }

  setDocente(docente?: any) {
    this.docenteService.setDocenteSeleccionado(docente);
    console.log(docente?.id);
  }

  getReporte():any{
    /*
    let lstEvaluaciones: Evaluacion[] = this.obtenerEvaluaciones();
    let lstUsuarios : Usuario[] = this.obtenerUsuarios();
    let lstUseRoles: Userol[] = this.obtenerUsuRoles();
    let lstReporte: Reporte[] = [];

    for(let usuRol of lstUseRoles){
      let evaluaciones:Evaluacion[] = lstEvaluaciones.filter(evaluacion => evaluacion.USEROL_ID === usuRol.USEROL_ID);

        if(evaluaciones){
          let usuario1 = lstUsuarios.find( userol => userol.USU_ID=== usuRol?.USU_ID);
         if(usuario1){
          lstReporte.push({evluacion: evaluaciones, usuario: usuario1, usurol: usuRol});
         }
        }
    }

    console.log(lstReporte);

    return lstReporte;*/
  }

  obtenerEvaluaciones():any{
    this.getEvaluaciones().subscribe({
      next: (periodosData) => {
        return periodosData;
      },
    });
  }

  obtenerUsuRoles():any{
    this.usuRol.getUseRoles().subscribe({
      next: (periodosData) => {
        return periodosData;
      },
    });
  }

  obtenerUsuarios():any{
    this.usuarioService.getUsuarios().subscribe({
      next: (periodosData) => {
        return periodosData;
      },
    });
  }
}
