import { Component } from '@angular/core';

interface Docente {
  nombre: string;
  estado: string;
  completitud: string;
}

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent {
  docentes: Docente[] = [
    { nombre: 'Naren Alejandro Imbachi', estado: 'Completado', completitud: '100%' },
    { nombre: 'Laura González', estado: 'Incompleto', completitud: '95%' },
    { nombre: 'Carlos Rodríguez', estado: 'Incompleto', completitud: '80%' },
    { nombre: 'Ana Martínez', estado: 'Completado', completitud: '100%' },
    { nombre: 'Miguel Sánchez', estado: 'Incompleto', completitud: '50%' },
    { nombre: 'María Fernández', estado: 'Completado', completitud: '90%' },
    { nombre: 'Roberto Pérez', estado: 'Incompleto', completitud: '60%' },
    { nombre: 'Sofía Ramirez', estado: 'Completado', completitud: '75%' },
    { nombre: 'Javier López', estado: 'Incompleto', completitud: '40%' },
    { nombre: 'Valeria Mendoza', estado: 'Completado', completitud: '85%' },
    // Puedes agregar más datos según sea necesario
  ];

  docentesFiltrados: Docente[] = [];

  filtroEstado: string = 'todos'; // Inicialmente mostrará todos los docentes

  constructor() {
    this.filtrarDocentes();
  }

  filtrarDocentes() {
    if (this.filtroEstado === 'todos') {
      this.docentesFiltrados = this.docentes;
    } else {
      this.docentesFiltrados = this.docentes.filter(docente => docente.estado === this.filtroEstado);
    }
  }
}
