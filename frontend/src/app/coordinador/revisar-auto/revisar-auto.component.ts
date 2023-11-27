import { Component,OnInit  } from '@angular/core';
import { Docente } from '../../../interfaces/docente';
import { EmailService } from '../../services/sendEmail.service';
import { UserService } from '../../services/user.service';
import { EvaluacionService } from '../../services/evaluacion.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-revisar-auto',
  templateUrl: './revisar-auto.component.html',
  styleUrl: './revisar-auto.component.css',
})
export class RevisarAutoComponent implements OnInit {
  constructor(private emailService: EmailService,private userService: UserService, private evaluacionService: EvaluacionService) {}
  opcion: number = 1;
  listDocentes: Docente[] = [];

  ngOnInit() {
    this.cargarUsuarios();
    this.evaluacionService.getReporte();
  }

  private cargarUsuarios() {
    this.userService.getUsuarioDetallado().subscribe({
      next: (usuarios) => this.listDocentes = usuarios,
      error: (error) => console.error('Error al obtener usuarios', error)
    });
  }

  lstDocentesMostrados: Docente[] = [];

  filterDocentes() {
    this.lstDocentesMostrados.splice(0, this.lstDocentesMostrados.length);

    for (let i = 0; i < this.listDocentes.length; i++) {
      if (this.opcion === 1 && this.listDocentes[i].USU_ESTADO === 1 && this.listDocentes[i].USU_TIPOUSUARIO === 2) {
        this.lstDocentesMostrados.push(this.listDocentes[i]);
      } else if (this.opcion === 2 && this.listDocentes[i].USU_ESTADO === 2 && this.listDocentes[i].USU_TIPOUSUARIO === 2) {
        this.lstDocentesMostrados.push(this.listDocentes[i]);
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
