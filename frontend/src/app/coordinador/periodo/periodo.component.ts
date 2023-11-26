import { Component } from '@angular/core';
import { Periodo } from '../../../interfaces/periodo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeriodoService } from '../../services/periodo.service';
import { Rol } from '../../../interfaces/rol';
import { ActivatedRoute, Router } from '@angular/router';
import { RolService } from '../../services/rol.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.component.html',
  styleUrl: './periodo.component.css'
})
export class PeriodoComponent {
  lstPeriodos: Periodo[] = [];
  operacion: string = 'Agregar';
  id: number;
  lstRoles: Rol[] = [];

  form: FormGroup;
  constructor(private fb: FormBuilder,
    private periodoService: PeriodoService,
    private aRouter: ActivatedRoute,
    private router: Router,
    private rolServicio: RolService, private toastr: ToastrService) {

    this.form = this.fb.group({
      anio: ['', [Validators.max(30), Validators.required]],
      nombre: ['', [Validators.max(30), Validators.required]],
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
      semestre: ['', [Validators.max(30), Validators.required]],
    });

    this.id = Number(aRouter.snapshot.paramMap.get('id'))
    this.obtenerRoles();

    this.getPeriodo(this.id);
  }

  getPeriodo(id: number) {
    this.periodoService.getPeriodoId(id).subscribe((datos: Periodo) => {
      console.log(datos);

      const dI = String(datos.PER_FECHAINICIO).substring(8, 10);
      const mI = String(datos.PER_FECHAINICIO).substring(5, 7);
      const aI = String(datos.PER_FECHAINICIO).substring(0, 4);
      const fechaInicio = `${aI}-${mI}-${dI}`;

      const dF = String(datos.PER_FECHAFIN).substring(8, 10);
      const mF = String(datos.PER_FECHAFIN).substring(5, 7);
      const aF = String(datos.PER_FECHAFIN).substring(0, 4);
      const fechaFin = `${aF}-${mF}-${dF}`;

      const sem = Number(datos.PER_SEMESTRE);
      console.log(sem)

      this.form.setValue({
        anio: aI,
        nombre: datos.PER_NOMBRE,
        fechaInicio: fechaInicio,
        fechaFin: fechaFin,
        semestre: sem
      })
    })
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operacion = 'Editar'
    }
    console.log(this.operacion)
  }

  obtenerRoles() {
    this.rolServicio.getRoles().subscribe({
      next: (rolData) => {
        this.lstRoles = rolData;
      },
    });
  }

  guardarPeriodo() {
    let periodo: Periodo = {
      PER_NOMBRE: this.form.get("nombre")?.value,
      PER_ESTADO: 1,
      //Creo que esto se debe restar menos 1 debido a que el periodo toma el valor de 1
      PER_SEMESTRE: (Number(this.form.get("semestre")?.value) + 1),
      PER_FECHAFIN: this.form.get("fechaFin")?.value,
      PER_FECHAINICIO: this.form.get("fechaInicio")?.value
    };

    if (this.id !== 0) {
      console.log("Entraaaaa!!!   editar!");
      //editar
      this.periodoService.updatePeriodo(this.id, periodo).subscribe(() => {
        console.log('Se actualizo correctamente el periodo')
      })
      this.router.navigate(["coordinador/periodos"]);
      this.toastr.success('El periodo se actulizo con exito')
    } else {
      //Agregar
      console.log("Entraaaaa!!!!");
      this.periodoService.addPeriodo(periodo).subscribe({
        next: () => {
          this.form.reset();
        }
      })
      this.router.navigate(["coordinador/periodos"]);
      this.toastr.success('El registro el periodo con exito')
    }
  }
}
