import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  // Crear un vector de labores
lstLabores = [
  {name: 'Bases de datos', estado: 'En ejecución', tipo: 'Docencia', horas: '64', Descripcion: 'Ingeniería de Sistemas Obligatoria 2023', FechaInicio: '14/08/2023', fechaFin: '30/11/2023', Resultados: '', Evaluacion: 0.0, acto: 'Si aplica' },
  {name: 'Desarrollo de software', estado: 'Pendiente', tipo: 'Investigación', horas: '48', Descripcion: 'Proyecto de Investigación 2023', FechaInicio: '01/09/2023', fechaFin: '30/11/2023', Resultados: '', Evaluacion: 0.0, acto: 'No aplica' },
  {name: 'Redes de computadoras', estado: 'Finalizada', tipo: 'Docencia', horas: '32', Descripcion: 'Ingeniería de Redes 2023', FechaInicio: '10/08/2023', fechaFin: '15/11/2023', Resultados: 'Informe presentado', Evaluacion: 4.5, acto: 'No aplica' },
  {name: 'Inteligencia artificial', estado: 'En ejecución', tipo: 'Docencia', horas: '56', Descripcion: 'Curso Avanzado 2023', FechaInicio: '20/08/2023', fechaFin: '10/12/2023', Resultados: '', Evaluacion: 0.0, acto: 'No aplica' },
  {name: 'Programación web', estado: 'Pendiente', tipo: 'Docencia', horas: '40', Descripcion: 'Curso Práctico 2023', FechaInicio: '05/09/2023', fechaFin: '20/12/2023', Resultados: '', Evaluacion: 0.0, acto: 'Si aplica' },
  {name: 'Seguridad informática', estado: 'Finalizada', tipo: 'Investigación', horas: '72', Descripcion: 'Proyecto de Seguridad 2023', FechaInicio: '15/08/2023', fechaFin: '30/11/2023', Resultados: 'Informe y presentación realizados', Evaluacion: 4.8, acto: 'No aplica' },
  {name: 'Diseño de algoritmos', estado: 'En ejecución', tipo: 'Docencia', horas: '50', Descripcion: 'Curso Avanzado 2023', FechaInicio: '25/08/2023', fechaFin: '15/12/2023', Resultados: '', Evaluacion: 0.0, acto: 'Si aplica' },
  {name: 'Gestión de proyectos', estado: 'Pendiente', tipo: 'Docencia', horas: '36', Descripcion: 'Curso Práctico 2023', FechaInicio: '01/09/2023', fechaFin: '30/11/2023', Resultados: '', Evaluacion: 0.0, acto: 'No aplica' },
  {name: 'Desarrollo sostenible', estado: 'Finalizada', tipo: 'Investigación', horas: '60', Descripcion: 'Proyecto Ambiental 2023', FechaInicio: '10/08/2023', fechaFin: '20/12/2023', Resultados: 'Informe presentado y aprobado', Evaluacion: 4.7, acto: 'Si aplica' },
  {name: 'Tecnologías emergentes', estado: 'En ejecución', tipo: 'Docencia', horas: '45', Descripcion: 'Curso Avanzado 2023', FechaInicio: '14/08/2023', fechaFin: '10/12/2023', Resultados: '', Evaluacion: 0.0, acto: 'No aplica' },
];
  constructor() { }

  getLabores(){
    return this.lstLabores;
  }
}
