import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaborService {
  lstlabores = [
    {id: 1, nombre: 'Ingenieria de Software 3', codigo: 'D', tipo: 'Docencia'},
    {id: 2, nombre: 'Trabajos de Docencia', codigo: 'TD', tipo: 'Trabajos Docencia'},
    {id: 3, nombre: 'Proyectos de Investigación', codigo: 'PI', tipo: 'Proyectos Investigación'},
    {id: 4, nombre: 'Trabajos de Investigación', codigo: 'TI', tipo: 'Trabajos Investigación'},
    {id: 5, nombre: 'Administración', codigo: 'AD', tipo: 'Administración'},
    {id: 6, nombre: 'Asesoría', codigo: 'AS', tipo: 'Asesoría'}
  ]
  constructor() { }

  getLstLabores(){
    return this.lstlabores;
  }
}
