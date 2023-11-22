import { Component } from '@angular/core';
import { Docente } from '../../../interfaces/docente';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ges-docente',
  templateUrl: './ges-docente.component.html',
  styleUrl: './ges-docente.component.css'
})

export class GesDocenteComponent {
  filtroNombre: string = "";
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
      rol: 'Docencia'
    }, 
    {
      id: 2,
      identificacion: 1002806392,
      nombre: 'Ruben',
      apellido: 'Cruz',
      genero: 'Hombre',
      estudio: 'pregrado',
      correo: 'rscruz@unicauca.edu.co',
      estado: 1,
      rol: 'Asesoria'
    }
  ]
  
  constructor(private toastr: ToastrService) { }

  inactivarDoc(id: number){
    console.log(id);
    //Falta el servicio para inactivar 
    this.toastr.warning('El docente fue inactivado con exito', 'Docente inactivado')
  }
}
