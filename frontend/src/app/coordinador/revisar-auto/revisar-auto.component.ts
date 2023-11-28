import { Component, OnInit } from '@angular/core';
import { Docente } from '../../../interfaces/docente';
import { EmailService } from '../../services/sendEmail.service';
import { UserService } from '../../services/userDetallado.service';
import { EvaluacionService } from '../../services/evaluacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioDetallado } from '../../../interfaces/usuarioDetallado';
import { UserNotificacion, Usunot } from '../../../interfaces/usunot';
import { PeriodoService } from '../../services/periodo.service';

import { NotificacionService } from '../../services/notificacion.service';

import { DocenteService } from '../../services/docente.service';
import { Periodo } from '../../../interfaces/periodo';
import { Evaluacion } from '../../../interfaces/evaluacion';
import { Labor } from '../../../interfaces/labor';
import { TipoLabor } from '../../../interfaces/tipoLabor';
import { UserolService } from '../../services/userol.service';
import { Userol } from '../../../interfaces/usuarioDetallado';
import { Usuario } from '../../../interfaces/sesion';
import { info } from 'console';
import { subscribe } from 'diagnostics_channel';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-revisar-auto',
  templateUrl: './revisar-auto.component.html',
  styleUrl: './revisar-auto.component.css',
})
export class RevisarAutoComponent implements OnInit {

  opcion: number = 1;
  listDocentes: UsuarioDetallado[] = [];
  notificaciones: UserNotificacion[] = [];
  

  docente1?: Usuario;
  periodo?: Periodo;
  lstEvaluaciones?: Evaluacion[] = [];
  lstLabores?: Labor[] = [];
  lstTipoLabores?: TipoLabor[] = [];
  lstUserRol?: Userol[] = [];
  useRol?: Userol;

  constructor(
    private emailService: EmailService,
    private userService: UserService,
    private periodoService: PeriodoService,
    private docenteService: DocenteService,
    private router: Router,
    private evaluacionService: EvaluacionService,
    private notificacionService: NotificacionService,
    private toastr: ToastrService
  ) {
    this.ngOnInit();
    this.periodo = evaluacionService.getPeriodo();
    this.lstLabores = this.obtenerLabores();
    this.lstTipoLabores = this.obtenerTiposLabor();
    this.useRol = docenteService.getUseRolSelecionado();
  }



  ngOnInit() {
    this.cargarUsuarios();
    //this.evaluacionService.getReporte();
  }

  tablasVisibles: boolean[] = [];

  mostrarTablas(index: number): void {
    this.tablasVisibles[index] = true;
  }

  ocultarTablas(index: number): void {
    this.tablasVisibles[index] = false;
  }

  ocultarTodo() {
    for (let i = 0; i < this.tablasVisibles.length; i++) {
      this.tablasVisibles[i] = false;
    }
  }

  private cargarUsuarios() {
    this.userService.getUsuarioDetallado().subscribe({
      next: (usuarios) => (this.listDocentes = usuarios),
      error: (error) => console.error('Error al obtener usuarios', error),
    });
  }
  private cargarNotificaciones() {
    this.notificacionService.getnotificaciones().subscribe({
      next: (notificaciones) => this.notificaciones = notificaciones,
      error: (error) => console.error('Error al obtener usuarios', error)
    });
  }

  lstDocentesMostrados: UsuarioDetallado[] = [];

  filterDocentes() {
    this.lstDocentesMostrados = [];
    this.cargarUsuarios();
    console.log(this.listDocentes);

    this.lstDocentesMostrados.splice(0, this.lstDocentesMostrados.length);

    for (let i = 0; i < this.listDocentes.length; i++) {
      const docente = this.listDocentes[i];

      if (docente.USU_TIPOUSUARIO === 2) {
        for (let j = 0; docente.userols && j < docente.userols.length; j++) {
          const userol = docente.userols[j];
          let evaluacionesTer: Evaluacion[] = [];
          let evaluacionesNoTer: Evaluacion[] = [];

          for (
            let k = 0;
            userol.evaluacions && k < userol.evaluacions.length;
            k++
          ) {
            const evaluacion = userol.evaluacions[k];
            if (evaluacion.PER_ID === this.periodo?.PER_ID) {
       
              if (evaluacion.EVA_ESTADO === 2) {
                evaluacionesTer.push(evaluacion);
              } else if (evaluacion.EVA_ESTADO === 1) {
                evaluacionesNoTer.push(evaluacion);
              }
            }
          }

          if (evaluacionesTer.length > 0 || evaluacionesNoTer.length > 0) {
            console.log("Periodo "+ this.periodo?.PER_NOMBRE);
            if (this.opcion === 1) {
              userol.evaluacions = evaluacionesTer;
            } else {
              userol.evaluacions = evaluacionesNoTer;
            }

            this.lstDocentesMostrados.push(docente);
          }
        }
      }
    }
  }

  sendEmailsToDisplayedTeachers() {
    if ( 
      Array.isArray(this.lstDocentesMostrados) &&
      this.lstDocentesMostrados.length > 0
    ) {
      this.toastr.success('Correos de notificación enviado.');
      this.emailService
        .sendEmailsToProfessors(this.lstDocentesMostrados)
        .subscribe({
          next: () => {
            console.log('Correos enviados con éxito a todos los docentes');
           for(let docente of this.lstDocentesMostrados){
            let fecha:Date = new Date();
            let notificacion:Usunot = {
              NOT_ID: 1,
              USU_ID: docente.USU_ID || 1,
              USUNOT_ESTADO: 1,
              USUNOT_FECHA: fecha
            }
            this.notificacionService.createNotificacion(notificacion).subscribe({
              next: () =>{

              }
            })}
           },
           
            
          error: (error) => console.error('Error al enviar correos', error),
        });
    } else {
      console.error('No hay docentes para enviar correos');
    }
  }

  onButtonClick(option: number) {
    this.opcion = option;
    this.filterDocentes();
  }

  obtenerLabores(): any {
    this.evaluacionService.getLstLabores().subscribe({
      next: (periodosData) => {
        this.lstLabores = periodosData;
      },
    });
  }

  obtenerTiposLabor(): any {
    this.evaluacionService.getLstTipoLabores().subscribe({
      next: (periodosData) => {
        this.lstTipoLabores = periodosData;
      },
    });
  }

  obtenerUseRol() {
    this.evaluacionService.getLstUserol().subscribe({
      next: (periodosData) => {
        this.lstUserRol = periodosData;
      },
    });
  }

  obtenerInfoLabor(id: number): any {
    return this.lstLabores?.find((labor) => labor.LAB_ID === id);
  }

  obtenerInfoTipoLabor(id: number) {
    return this.lstTipoLabores?.find((labor) => labor.TL_ID === id);
  }

  definirEstado(estado: number) {
    if (estado === 1) {
      return 'En ejecucion';
    } else if (estado === 2) {
      return 'Terminado';
    } else if (estado === 3) {
      return 'Cerrado';
    } else {
      return 'No valido';
    }
  }

  infoEvaluaciones(userol?: Userol): any {
    let lstEvaluaciones: Evaluacion[] = [];
    for (let eva of userol?.evaluacions || []) {
      lstEvaluaciones.push(eva);
    }

    return lstEvaluaciones;
  }
}
