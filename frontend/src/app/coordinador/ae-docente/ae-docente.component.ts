import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Docente } from '../../../interfaces/docente';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { Usuario } from '../../../interfaces/sesion';
import { RolService } from '../../services/rol.service';
import { Rol } from '../../../interfaces/rol';

@Component({
  selector: 'app-ae-docente',
  templateUrl: './ae-docente.component.html',
  styleUrl: './ae-docente.component.css'
})
export class AeDocenteComponent {
  form: FormGroup;
  id: number;
  operacion: string = 'Agregar ';
  lstRoles:Rol[] = [];

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private aRouter: ActivatedRoute, private usuarioService:UserService, private rolServicio:RolService){ //falta la inyeccion de dependencias del servicio
    this.form = this.fb.group(this.validaciones()),

    //Obtener el parametro (0 agregar, diferente editar)
    this.id = Number(aRouter.snapshot.paramMap.get('id'))
    this.obtenerRoles();
  }

  ngOnInit(): void{
    if(this.id != 0){
      this.operacion = 'Editar'
    }
  }

  validaciones(){
    return {
      //tipoId: ['', Validators.required],
      identificacion: [null, [Validators.required, Validators.maxLength(10)]],
      nombre: ['', [Validators.required, Validators.maxLength(20)]],
      apellido: ['', [Validators.required, Validators.maxLength(20)]],
      genero: ['1', Validators.required],
      tipoDoc: ['1', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      ultimoEst: ['', Validators.required],
      contrasena: ['', Validators.required]
    }
  }

  obtenerRoles(){
    this.rolServicio.getRoles().subscribe({
      next: (rolData) => {
          this.lstRoles = rolData;
      },
    });
  }



  addUsuario(){
    const usuario:Usuario = {
      USU_TIPOID: this.form.value.tipoId,
      USR_IDENTIFICACION: this.form.value.identificacion,
      USU_NOMBRE: this.form.value.nombre,
      USU_APELLIDO: this.form.value.apellido,
      USU_GENERO: this.form.value.genero,
      USU_ROLID: this.form.value.tipoDoc,
      USU_CORREO: this.form.value.correo,
      USU_ESTUDIO: this.form.value.ultimoEst,
      USU_ESTADO: 1,
      USU_CLAVE: this.form.value.contrasena,
      USU_TIPOUSUARIO: 2,
      USU_FOTO: ''
    }
    this.usuarioService.addUsuario(usuario).subscribe({
      next: ()=>{
        this.form.reset();
      }
    })

    this.router.navigate(["coordinador/docentes"]);
    this.toastr.success('El docente fue registrado con exito')
  }

}
