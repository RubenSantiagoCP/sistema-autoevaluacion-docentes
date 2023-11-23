import { Component } from '@angular/core';
import { Docente } from '../../../interfaces/docente';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { Usuario } from '../../../interfaces/sesion';
import { RolService } from '../../services/rol.service';
import { Rol } from '../../../interfaces/rol';

@Component({
  selector: 'app-ges-docente',
  templateUrl: './ges-docente.component.html',
  styleUrl: './ges-docente.component.css'
})

export class GesDocenteComponent {
  filtroNombre: string = "";
  listDocentes: Usuario[] = [
  ]

  lstRoles:Rol[] = [];
  
  constructor(private toastr: ToastrService, private usuarioService:UserService, private rolServicio:RolService) {
    this.obtenerDocentes();
    this.obtenerRoles();
   }

  inactivarDoc(id: number){
    console.log(id);
    //Falta el servicio para inactivar 
    this.toastr.warning('El docente fue inactivado con exito', 'Docente inactivado')
  }

  obtenerDocentes() {
    this.usuarioService.getUsuarios().subscribe({
      next: (docenteData) => {
        this.listDocentes = docenteData;
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
}
