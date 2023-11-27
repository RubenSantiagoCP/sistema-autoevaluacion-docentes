import { Component, OnInit } from '@angular/core';
import { Docente } from '../../../interfaces/docente';
import { EmailService } from '../../services/sendEmail.service';
import { UserService } from '../../services/userDetallado.service';
import { EvaluacionService } from '../../services/evaluacion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioDetallado } from '../../../interfaces/usuarioDetallado';
import { PeriodoService } from '../../services/periodo.service';
import { DocenteService } from '../../services/docente.service';
import { Periodo } from '../../../interfaces/periodo';
import { Evaluacion } from '../../../interfaces/evaluacion';
import { Labor } from '../../../interfaces/labor';
import { TipoLabor } from '../../../interfaces/tipoLabor';
import { UserolService } from '../../services/userol.service';
import { Userol } from '../../../interfaces/usuarioDetallado';
import { Usuario } from '../../../interfaces/sesion';
import { info } from 'console';
import { Reporte } from '../../../interfaces/reporte';
import { RolService } from '../../services/rol.service';
import { Rol } from '../../../interfaces/rol';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css'],
})
export class ReporteComponent {
  docente?: Usuario;
  periodo?: Periodo;
  lstReportes: Reporte[] = [];
  lstRoles: Rol[] = [];

  constructor(
    private emailService: EmailService,
    private userService: UserService,
    private periodoService: PeriodoService,
    private docenteService: DocenteService,
    private router: Router,
    private evaluacionService: EvaluacionService,
    private rolServicio: RolService
  ) {
    this.ngOnInit();
    this.periodo = evaluacionService.getPeriodo();
    this.obtenerRoles();
  }
  opcion: number = 1;
  listDocentes: UsuarioDetallado[] = [];

  ngOnInit() {
    this.cargarUsuarios();
    //this.evaluacionService.getReporte();
  }

  filtroEstado: string = 'todos'; // Inicialmente mostrará todos los docentes

  private cargarUsuarios() {
    this.userService.getUsuarioDetallado().subscribe({
      next: (usuarios) => {
        this.listDocentes = usuarios;
        this.getReporte();
      },
      error: (error) => console.error('Error al obtener usuarios', error),
    });
  }

  lstDocentesMostrados: UsuarioDetallado[] = [];

  getReporte() {
    this.lstReportes = [];
    this.lstDocentesMostrados.splice(0, this.lstDocentesMostrados.length);

    for (let i = 0; i < this.listDocentes.length; i++) {
      console.log('Entra wey');
      const docente = this.listDocentes[i];

      if (docente.USU_TIPOUSUARIO === 2) {
        for (let j = 0; docente.userols && j < docente.userols.length; j++) {
          const userol = docente.userols[j];
          let evaTerminadas = 0;
          let evaNoTerminadas = 0;
          let cant = 0;

          for (
            let k = 0;
            userol.evaluacions && k < userol.evaluacions.length;
            k++
          ) {
            const evaluacion = userol.evaluacions[k];

            if (evaluacion.PER_ID === this.periodo?.PER_ID) {
              if (evaluacion.EVA_ESTADO === 1) {
                evaNoTerminadas++;
              } else if (evaluacion.EVA_ESTADO === 2) {
                evaTerminadas++;
              }
              cant++;
            }
          }

          if (cant > 0) {
            let nombreD = docente.USU_NOMBRE;
            let rol = this.rolUsuario(userol.ROL_ID);
            this.lstReportes.push({
              nombreUsu: nombreD,
              idUsuario: docente.USR_IDENTIFICACION,
              rolUsuario: rol,
              evaluacionNoTerminada: evaNoTerminadas,
              evaluacionTerminada: evaTerminadas,
              cantItens: cant,
            });
          }
        }
      }
    }
    console.log('Reportes: ');
    console.log(this.lstReportes);
  }

  infoEvaluaciones(userol?: Userol): any {
    let lstEvaluaciones: Evaluacion[] = [];
    for (let eva of userol?.evaluacions || []) {
      lstEvaluaciones.push(eva);
    }

    return lstEvaluaciones;
  }

  obtenerRoles() {
    this.rolServicio.getRoles().subscribe({
      next: (rolData) => {
        this.lstRoles = rolData;
      },
    });
  }

  rolUsuario(id: number): any {
    for (let item of this.lstRoles) {
      if (item.ROL_ID === id) {
        return item.ROL_DESCRIPCION;
      }
    }

    return '';
  }

  porcentaje(reporte: Reporte) {
    return (reporte.evaluacionTerminada * 100) / reporte.cantItens;
  }
}
