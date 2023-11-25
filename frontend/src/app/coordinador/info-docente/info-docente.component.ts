import { Component, Input  } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Usuario } from '../../../interfaces/sesion';
import { DocenteService } from '../../services/docente.service';

@Component({
  selector: 'app-info-docente',
  templateUrl: './info-docente.component.html',
  styleUrl: './info-docente.component.css'
})
export class InfoDocenteComponent {
  docente?:Usuario;
  errorMessage: string = "";
  idUsuario?:number;
  data_user?:any = '';
  genero?:string;
  rol?:string;

  constructor(private docenteService: DocenteService){
    this.docente = docenteService.getDocenteSeleccionado();
    this.genero = this.diccionarioGenero(this.docente?.USU_GENERO);
    this.rol = this.docenteService.getRolSeleccionado();
  }

  diccionarioGenero(genero?:string){
    if(genero=== "M"){
      return "Masculino"
    }else if(genero === "F"){
      return "Femenino";
    }else{
      return "Otros";
    }
  }
}
