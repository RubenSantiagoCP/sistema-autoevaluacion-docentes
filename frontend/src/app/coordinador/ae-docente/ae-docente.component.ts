import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Docente } from '../../../interfaces/docente';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { Usuario } from '../../../interfaces/sesion';
import { RolService } from '../../services/rol.service';
import { Rol } from '../../../interfaces/rol';
import { DocenteService } from '../../services/docente.service';
import { Userol } from '../../../interfaces/userol';
import { UserolService } from '../../services/userol.service';

@Component({
  selector: 'app-ae-docente',
  templateUrl: './ae-docente.component.html',
  styleUrl: './ae-docente.component.css',
})
export class AeDocenteComponent {
  form: FormGroup;
  operacion: string = 'Agregar ';
  lstRoles: Rol[] = [];
  docenteSeleccionado?: Usuario;
  usuarioCreada:number = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute,
    private usuarioService: UserService,
    private rolServicio: RolService,
    private docenteServicio: DocenteService,
    private userolServicio: UserolService,
  ) {
    //falta la inyeccion de dependencias del servicio
    (this.form = this.fb.group(this.validaciones())),
      (this.operacion = this.obtenerOperacion(
        this.docenteServicio.getOperacion()
      ));
    if (this.docenteServicio.getOperacion() === 2) {
      this.docenteSeleccionado = this.docenteServicio.getDocenteSeleccionado();
    }
    this.obtenerRoles();
  }

  validaciones() {
    return {
      //tipoId: ['', Validators.required],
      identificacion: [null, [Validators.required, Validators.maxLength(10)]],
      nombre: ['', [Validators.required, Validators.maxLength(20)]],
      apellido: ['', [Validators.required, Validators.maxLength(20)]],
      genero: ['1', Validators.required],
      tipoDoc: ['1', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      ultimoEst: ['', Validators.required],
      contrasena: ['', Validators.required],
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
    };
  }

  obtenerRoles() {
    this.rolServicio.getRoles().subscribe({
      next: (rolData) => {
        this.lstRoles = rolData;
      },
    });
  }

  addUsuario() {
    const usuario: Usuario = {
      USU_TIPOID: this.form.value.tipoId,
      USR_IDENTIFICACION: this.form.value.identificacion,
      USU_NOMBRE: this.form.value.nombre,
      USU_APELLIDO: this.form.value.apellido,
      USU_GENERO: this.form.value.genero,
      USU_CORREO: this.form.value.correo,
      USU_ESTUDIO: this.form.value.ultimoEst,
      USU_ESTADO: 1,
      USU_CLAVE: this.form.value.contrasena,
      USU_TIPOUSUARIO: 2,
      USU_FOTO: '',
    };

      let idUsuario: number = usuario.USR_IDENTIFICACION;

    this.usuarioService.addUsuario(usuario).subscribe({
      next: () => {
        this.prueba(idUsuario);
      },
    }
      
    );

    console.log("Id del usuario: "+ idUsuario);
    
    this.toastr.success('El docente fue registrado con exito');
  }

  obtenerOperacion(operacion?: number) {
    if (operacion === 1) {
      return 'Agregar';
    } else {
      return 'Editar';
    }
  }

  addUserol(identificacion: number){

    const userol: Userol = {
      ROL_ID: this.form.value.tipoDoc,
      USU_ID: identificacion,
      UR_FECHAINICIO: this.form.value.fechaInicio,
      UR_FECHAFIN: this.form.value.fechaFin,
    }

    this.userolServicio.saveUserol(userol).subscribe({
      next: () => {
        this.form.reset();
      },
    });
  }

  prueba(identificacion: number){
    let valueId:number= 0;
    this.usuarioService.getUsuarioByIdentificacion(identificacion).subscribe({
      next:(userData) => {
        console.log(userData);
        this.addUserol(userData.USU_ID);
      }
    });
    console.log(valueId);
    return valueId;
  }
}
