import { Component,OnInit  } from '@angular/core';
import { Docente } from '../../../interfaces/docente';
import { EmailService } from '../../services/sendEmail.service';
import { UserService } from '../../services/userDetallado.service';
import { EvaluacionService } from '../../services/evaluacion.service';
import { ActivatedRoute } from '@angular/router';
import { UsuarioDetallado } from '../../../interfaces/usuarioDetallado';
import { PeriodoService } from '../../services/periodo.service';


@Component({
  selector: 'app-revisar-auto',
  templateUrl: './revisar-auto.component.html',
  styleUrl: './revisar-auto.component.css',
})
export class RevisarAutoComponent implements OnInit {
  constructor(private emailService: EmailService,private userService: UserService, private periodoService : PeriodoService) {}
  opcion: number = 1;
  listDocentes: UsuarioDetallado[] = [];

  

  ngOnInit() {
    this.cargarUsuarios();
    //this.evaluacionService.getReporte();
  }

  private cargarUsuarios() {
    this.userService.getUsuarioDetallado().subscribe({
      next: (usuarios) => this.listDocentes = usuarios,
      error: (error) => console.error('Error al obtener usuarios', error)
      
      
    });
  }

  lstDocentesMostrados: UsuarioDetallado[] = [];

  filterDocentes() {
    const usuario: UsuarioDetallado = this.listDocentes[1];

// Accediendo al primer UserRol si existe
if (usuario.userols && usuario.userols.length > 0) {
    const primerUserRol = usuario.userols[0];
    console.log(primerUserRol);

    // Accediendo a las evaluaciones del primer UserRol si existen
    if (primerUserRol.evaluacions && primerUserRol.evaluacions.length > 0) {
        const primeraEvaluacion = primerUserRol.evaluacions[0];
        console.log(primeraEvaluacion);
    }
}
    
   // console.log(this.listDocentes[1].Userol);
    this.lstDocentesMostrados.splice(0, this.lstDocentesMostrados.length);

    for (let i = 0; i < this.listDocentes.length; i++) {
      const docente = this.listDocentes[i];
    
      if (docente.USU_TIPOUSUARIO === 2) {
        for (let j = 0; docente.userols && j < docente.userols.length; j++) {
          const userol = docente.userols[j];
    
          for (let k = 0; userol.evaluacions && k < userol.evaluacions.length; k++) {
            const evaluacion = userol.evaluacions[k];
    
            if (this.opcion === 1 && evaluacion.EVA_ESTADO === 1) {
              this.lstDocentesMostrados.push(docente);
              break; 
            } else if (this.opcion === 2 && evaluacion.EVA_ESTADO === 2) {
              this.lstDocentesMostrados.push(docente);
              break; 
            }
          }
        }
      }
    }
  }
  

  sendEmailsToDisplayedTeachers() {
    if (Array.isArray(this.lstDocentesMostrados) && this.lstDocentesMostrados.length > 0) {
      this.emailService.sendEmailsToProfessors(this.lstDocentesMostrados).subscribe({
        next: () => console.log('Correos enviados con éxito a todos los docentes'),
        error: (error) => console.error('Error al enviar correos', error)
      });
    } else {
      console.error('No hay docentes para enviar correos');
    }
  }
  
  onButtonClick(option:number) {
    this.opcion = option;
    this.filterDocentes();
  }

}
