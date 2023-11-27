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
  selector: 'app-select-coordinador',
  templateUrl: './select-coordinador.component.html',
  styleUrl: './select-coordinador.component.css'
})
export class SelectCoordinadorComponent {
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

  obtenerCoordinador() {
      this.usuarioService.getUserByType(1).subscribe({
        next: (docenteData) => {
          this.lstDocentes = docenteData;
        },
      });
    
  }

  obtenerUseRoles() {
    this.userolService.getUseRoles().subscribe({
      next: (docenteData) => {
        this.lstUseRol = docenteData;
        this.obtenerCoordinador();
      },
    });
  }

  setDocenteSeleccionado(docente?: Usuario) {
    this.docenteService.setDocenteSeleccionado(docente);
    let userol:any = this.lstUseRol.find(objeto => objeto.USU_ID === docente?.USU_ID);
    this.docenteService.setUseRolSeleccionado(userol);
  }
}
