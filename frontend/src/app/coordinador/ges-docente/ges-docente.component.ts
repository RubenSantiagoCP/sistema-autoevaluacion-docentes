import { Component, OnInit } from '@angular/core';
import { Docente } from '../../../interfaces/docente';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { Usuario } from '../../../interfaces/sesion';
import { RolService } from '../../services/rol.service';
import { Rol } from '../../../interfaces/rol';
import { DocenteService } from '../../services/docente.service';

@Component({
  selector: 'app-ges-docente',
  templateUrl: './ges-docente.component.html',
  styleUrl: './ges-docente.component.css'
})

export class GesDocenteComponent implements OnInit {
  filtroNombre: string = "";
  listDocentes: Usuario[] = [
  ]
  docenteSeleccionado?:Usuario;

  lstRoles:Rol[] = [];
  
  constructor(private toastr: ToastrService, private usuarioService:UserService, private rolServicio:RolService, private docenteService:DocenteService) {
    
   }

   ngOnInit(): void {
    this.obtenerDocentes();
    this.obtenerRoles();
   }



  inactivarDoc(docente:Usuario){
    if(docente.USU_ESTADO===1){
      docente.USU_ESTADO = 2;
    }else{
      docente.USU_ESTADO = 1;
    }
    this.usuarioService.editUsuario(docente).subscribe({
    });
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

  setDocenteSeleccionado(id:number){
    this.docenteSeleccionado = this.listDocentes[id];
    this.docenteService.setDocenteSeleccionado(this.docenteSeleccionado);
    this.docenteService.setRolDocenteSeleccionado(this.rolUsuario(""+this.docenteSeleccionado.USU_ROLID));
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
