import { Injectable } from '@angular/core';
import { Usuario } from '../../interfaces/sesion';
import { Rol } from '../../interfaces/rol';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  docenteSeleccionado?:Usuario;
  rolDocenteSeleccionado?:string;
  operacion?:number = 1;
  constructor() { }

  setDocenteSeleccionado(usuarioSeleccionado:Usuario){
    this.docenteSeleccionado = usuarioSeleccionado;
  }

  getDocenteSeleccionado(){
    return this.docenteSeleccionado;
  }

  setRolDocenteSeleccionado(rol?:string){
    this.rolDocenteSeleccionado = rol;
  }

  getRolSeleccionado(){
    return this.rolDocenteSeleccionado;
  }

  setOperacion(operacion:number){
    this.operacion = operacion;
  }

  getOperacion(){
    return this.operacion;
  }
}
