import { Component } from '@angular/core';
import { Docente } from '../../../interfaces/docente';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { RolService } from '../../services/rol.service';
import { Rol } from '../../../interfaces/rol';
import { Usuario } from '../../../interfaces/sesion';
import { DocenteService } from '../../services/docente.service';

@Component({
  selector: 'app-selec-docente',
  templateUrl: './selec-docente.component.html',
  styleUrl: './selec-docente.component.css'
})
export class SelecDocenteComponent {
  filtroNombre: string = '';
  lstDocentes:Usuario[] = [
  ]
  lstRoles:Rol[] = [];


  constructor(private usuarioService:UserService, private rolServicio:RolService, private docenteService:DocenteService){
    this.obtenerDocentes();
    this.obtenerRoles();
  }
  
  obtenerDocentes() {
    this.usuarioService.getUsuarios().subscribe({
      next: (docenteData) => {
        this.lstDocentes = docenteData;
      },
    });
  }

  obtenerRoles(){
    this.rolServicio.getRoles().subscribe({
      next: (rolData) => {
          this.lstRoles = rolData;
      },
    });
  }

  rolUsuario(id:string):any{
    for(let item of this.lstRoles  ){
        if(item.ROL_ID === parseInt(id)){
          console.log(item.ROL_ID)
          return item.ROL_DESCRIPCION;
        }
    }
    return '';
  }

  setDocenteSeleccionado(docente?: Usuario){
    this.docenteService.setDocenteSeleccionado(docente);
  }

}
