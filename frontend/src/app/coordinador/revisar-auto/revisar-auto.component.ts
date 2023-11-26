import { Component,OnInit  } from '@angular/core';
import { Docente } from '../../../interfaces/docente';
import { EmailService } from '../../services/sendEmail.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-revisar-auto',
  templateUrl: './revisar-auto.component.html',
  styleUrl: './revisar-auto.component.css',
})
export class RevisarAutoComponent implements OnInit {
  constructor(private emailService: EmailService,private userService: UserService) {}
  opcion: number = 1;
  listDocentes: Docente[] = [];

  ngOnInit() {
    this.cargarUsuarios();
  }

  private cargarUsuarios() {
    this.userService.getUsuarios().subscribe({
      next: (usuarios) => this.listDocentes = usuarios,
      error: (error) => console.error('Error al obtener usuarios', error)
    });
  }
  /*listDocentes: Docente[] = [
    {
      id: 1,
      identificacion: 1002806392,
      nombre: 'Naren',
      apellido: 'Imbachi',
      genero: 'Hombre',
      estudio: 'pregrado',
      correo: 'nimbachi@unicauca.edu.co',
      estado: 1,
      rol: 'Docencia',
    },
    {
      id: 2,
      identificacion: 1002806392,
      nombre: 'Ruben',
      apellido: 'Cruz',
      genero: 'Hombre',
      estudio: 'pregrado',
      correo: 'rscruz@unicauca.edu.co',
      estado: 2,
      rol: 'Asesoria',
    },
  ];*/

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
