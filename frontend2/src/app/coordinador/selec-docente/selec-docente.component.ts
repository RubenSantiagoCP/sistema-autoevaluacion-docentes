import { Component } from '@angular/core';
import { Docente } from '../../../interfaces/docente';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-selec-docente',
  templateUrl: './selec-docente.component.html',
  styleUrl: './selec-docente.component.css'
})
export class SelecDocenteComponent {
  filtroNombre: string = '';
  lstDocentes:Docente[] = [
    {id: 1, identificacion: 12345, nombre: "Juliana", apellido: "Obando", genero: "M",  estudio: "Maestria", correo: "fobando@unicauca.edu.co", estado: 1, rol: "Docencia"},
    {id: 1, identificacion: 12345, nombre: "Francisco", apellido: "Obando", genero: "M",  estudio: "Maestria", correo: "fobando@unicauca.edu.co", estado: 1, rol: "Docencia"},
    {id: 1, identificacion: 12345, nombre: "Francisco", apellido: "Obando", genero: "M",  estudio: "Maestria", correo: "fobando@unicauca.edu.co", estado: 1, rol: "Docencia"},
    {id: 1, identificacion: 12345, nombre: "Francisco", apellido: "Obando", genero: "M",  estudio: "Maestria", correo: "fobando@unicauca.edu.co", estado: 1, rol: "Docencia"},
    {id: 1, identificacion: 12345, nombre: "Francisco", apellido: "Obando", genero: "M",  estudio: "Maestria", correo: "fobando@unicauca.edu.co", estado: 1, rol: "Docencia"}
  ]
}
