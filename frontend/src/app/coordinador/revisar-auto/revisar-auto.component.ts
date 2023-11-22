import { Component } from '@angular/core';
import { Docente } from '../../../interfaces/docente';

@Component({
  selector: 'app-revisar-auto',
  templateUrl: './revisar-auto.component.html',
  styleUrl: './revisar-auto.component.css',
})
export class RevisarAutoComponent {
  opcion: number = 1;
  listDocentes: Docente[] = [
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
  ];

  lstDocentesMostrados: Docente[] = [];

  filterDocentes() {
    this.lstDocentesMostrados.splice(0, this.lstDocentesMostrados.length);

    for (let i = 0; i < this.listDocentes.length; i++) {
      if (this.opcion === 1 && this.listDocentes[i].estado === 1) {
        // Agrega el docente al array lstDocentesMostrados solo si cumple la condición
        this.lstDocentesMostrados.push(this.listDocentes[i]);
      } else if (this.opcion === 2 && this.listDocentes[i].estado === 2) {
        // Agrega el docente al array lstDocentesMostrados solo si cumple la condición
        this.lstDocentesMostrados.push(this.listDocentes[i]);
      }
      // Puedes agregar más condiciones según sea necesario
    }
  }

  onButtonClick(option:number) {
    this.opcion = option;
    this.filterDocentes();
  }
}
