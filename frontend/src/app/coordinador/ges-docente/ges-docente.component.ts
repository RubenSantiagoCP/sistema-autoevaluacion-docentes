import { Component, OnInit } from '@angular/core';
import { Docente } from '../../../interfaces/docente';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { Usuario } from '../../../interfaces/sesion';
import { RolService } from '../../services/rol.service';
import { Rol } from '../../../interfaces/rol';
import { DocenteService } from '../../services/docente.service';
import { Userol } from '../../../interfaces/userol';
import { UserolService } from '../../services/userol.service';

@Component({
  selector: 'app-ges-docente',
  templateUrl: './ges-docente.component.html',
  styleUrl: './ges-docente.component.css'
})

export class GesDocenteComponent implements OnInit {
  filtroNombre: string = "";
  listDocentes: Usuario[] = [
  ]
  lstUsuRoles: Userol [] = [];
  docenteSeleccionado?:Usuario;

  lstRoles:Rol[] = [];
  
  constructor(private toastr: ToastrService, private usuarioService:UserService, private rolServicio:RolService, private docenteService:DocenteService, private useRolService: UserolService) {
    
   }

   ngOnInit(): void {
    this.obtenerDocentes();
    this.obtenerRoles();
    this.obtenerUseRoles();
   }



  inactivarDoc(docente:Usuario){
    if(docente.USU_ESTADO===1){
      docente.USU_ESTADO = 2;
      this.toastr.warning('El docente fue inactivado con exito', 'Docente inactivado')
    }else{
      docente.USU_ESTADO = 1;
      this.toastr.warning('El docente fue activado con exito', 'Docente activado')
    }
    this.usuarioService.updateEstadoUser(docente.USU_ID, docente).subscribe({
    });
  }

  obtenerDocentes() {
    this.usuarioService.getUserByType(2).subscribe({
      next: (docenteData) => {
        this.listDocentes = docenteData;
      },
    });
  }

  obtenerRoles(){
    this.rolServicio.getRoles().subscribe({
      next: (rolData) => {
          this.lstRoles = rolData;
          console.log(rolData);
      },
    });
  }

  obtenerUseRoles(){
    this.useRolService.getUseRoles().subscribe({
      next: (rolData) => {
          this.lstUsuRoles = rolData;
      },
    });
  }

  rolUsuario(docente:Usuario):any{
    console.log(docente);  
    let respuesta: Userol = this.rolUsuarioDescripcion(docente.USU_ID);
    if(respuesta){
      for(let item of this.lstRoles  ){

        if(respuesta.ROL_ID!==undefined){
         
          if(item.ROL_ID === respuesta.ROL_ID){
            console.log("entra x3");
            console.log(item.ROL_DESCRIPCION)
            return item.ROL_DESCRIPCION;
          } 
        }
          
      }
    }
   
    return '';
  }

  rolUsuarioDescripcion(id?:number):any{
    for(let userol of this.lstUsuRoles){
      if(userol.USU_ID=== id){
        console.log("entra");
        return userol;
      }
    }
  }

  setDocenteSeleccionado(id:number){
    this.docenteSeleccionado = this.listDocentes[id];
    this.docenteService.setDocenteSeleccionado(this.docenteSeleccionado);
    //this.docenteService.setRolDocenteSeleccionado(this.rolUsuario(""+this.docenteSeleccionado.USU_ROLID));
  }

  definirOperacion(operacion:number, docente:number){
    this.docenteService.setOperacion(operacion);
    if(docente>=0){
      this.docenteService.setDocenteSeleccionado(this.listDocentes[docente]);
    }
  }

  definirInactivar(estado:number){
    if(estado===1){
      return "Inactivar";
    }else{
      return "Activar";
    }
  }
}
