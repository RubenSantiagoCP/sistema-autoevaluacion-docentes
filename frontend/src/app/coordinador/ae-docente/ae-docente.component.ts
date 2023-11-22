import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Docente } from '../../../interfaces/docente';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ae-docente',
  templateUrl: './ae-docente.component.html',
  styleUrl: './ae-docente.component.css'
})
export class AeDocenteComponent {
  form: FormGroup;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private aRouter: ActivatedRoute){ //falta la inyeccion de dependencias del servicio
    this.form = this.fb.group(this.validaciones()),

    //Obtener el parametro (0 agregar, diferente editar)
    this.id = Number(aRouter.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void{
    if(this.id != 0){
      this.operacion = 'Editar',
      this.getDocente(this.id)
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
      contraseña: ['', Validators.required]
    }
  }

  getDocente(id: number){
    //llamado al metodo de obtener producto del service 
  }

  //Funcion para recuperar los valores ingresados
  crearDocente(){
    //Como se maneja el id?
    const docente: Docente = {
      id: 3,
      //tipoId: this.form.value.tipoId,
      identificacion: this.form.value.identificacion,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      genero: this.form.value.genero,
      rol: this.form.value.tipoDoc,
      correo: this.form.value.correo,
      estudio: this.form.value.ultimoEst,
      estado: 1,
      //contraseña: this.form.value.contraseña,
    }
    console.log(docente);
    this.router.navigate(["coordinador/docentes"]);
    this.toastr.success('El docente fue registrado con exito')
    
  }
}
