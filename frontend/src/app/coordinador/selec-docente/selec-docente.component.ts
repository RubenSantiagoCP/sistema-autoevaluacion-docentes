import { Component } from '@angular/core';
import { Docente } from '../../../interfaces/docente';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { RolService } from '../../services/rol.service';
import { Rol } from '../../../interfaces/rol';
import { Usuario } from '../../../interfaces/sesion';
import { DocenteService } from '../../services/docente.service';
import { UserolService } from '../../services/userol.service';
import { Userol } from '../../../interfaces/userol';

@Component({
  selector: 'app-selec-docente',
  templateUrl: './selec-docente.component.html',
  styleUrl: './selec-docente.component.css',
})
export class SelecDocenteComponent {
  filtroNombre: string = '';
  lstDocentes: Usuario[] = [];
  lstRoles: Rol[] = [];
  lstUseRol: Userol[] = [];

  constructor(
    private usuarioService: UserService,
    private rolServicio: RolService,
    private docenteService: DocenteService,
    private userolService: UserolService
  ) {
    this.obtenerUseRoles();
  }

  obtenerUseRoles() {
    this.userolService.getUseRoles().subscribe({
      next: (docenteData) => {
        this.lstUseRol = docenteData;
        this.obtenerDocentes();
        this.obtenerRoles();
      },
    });
  }

  obtenerDocentes() {
  
      this.usuarioService.getUserByType(2).subscribe({
        next: (docenteData) => {
          this.lstDocentes = docenteData;
        },
      });
  }

  obtenerRoles() {
    this.rolServicio.getRoles().subscribe({
      next: (rolData) => {
        this.lstRoles = rolData;

      },
    });
  }

  rolUsuario(docente: Usuario): any {
    let usurol:any = this.lstUseRol.find(objeto => objeto.USU_ID === docente.USU_ID)
    for (let item of this.lstRoles) {
      if (item.ROL_ID === usurol.ROL_ID) {
        console.log(item.ROL_ID);
        return item.ROL_DESCRIPCION;
      }
    }
    return '';
  }

  setDocenteSeleccionado(docente?: Usuario) {
    this.docenteService.setDocenteSeleccionado(docente);
    let userol:any = this.lstUseRol.find(objeto => objeto.USU_ID === docente?.USU_ID);
    this.docenteService.setUseRolSeleccionado(userol);
  }
}
