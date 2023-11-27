import { Injectable } from '@angular/core';
import { Usuario } from '../../interfaces/sesion';
import { Rol } from '../../interfaces/rol';
import { Userol } from '../../interfaces/userol';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  docenteSeleccionado?:Usuario;
  rolDocenteSeleccionado?:string;
  useRolSeleccionado?: Userol;
  operacion?:number = 1;
  constructor() { }

  setDocenteSeleccionado(usuarioSeleccionado?:Usuario){
    this.docenteSeleccionado = usuarioSeleccionado;
    console.log(this.docenteSeleccionado);
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

  getUseRolSelecionado(){
    return this.useRolSeleccionado;
  }

  setUseRolSeleccionado(userol: Userol){
    console.log(userol)
;    this.useRolSeleccionado = userol;
  }
}
