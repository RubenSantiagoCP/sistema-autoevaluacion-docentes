import { Component } from '@angular/core';
import { Periodo } from '../../../interfaces/periodo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeriodoService } from '../../services/periodo.service';

@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.component.html',
  styleUrl: './periodo.component.css'
})
export class PeriodoComponent {
   lstPeriodos:Periodo[] = [
   ];

   form: FormGroup;
   constructor(private fb: FormBuilder, private periodoService:PeriodoService) {
    this.form = this.fb.group({
      anio: ['', [Validators.max(30), Validators.required]], 
      nombre: ['', [Validators.max(30), Validators.required]],
      fechaInicio: ['', [Validators.max(30), Validators.required]],
      fechaFin: ['', [Validators.max(30), Validators.required]],
      semestre: ['', [Validators.max(30), Validators.required]],
    });
  }

  ngOnInit(): void {}

  guardarPeriodo(){
    let periodo: Periodo = {
      PER_NOMBRE: this.form.get("nombre")?.value,
      PER_ESTADO: 1,
      PER_SEMESTRE: this.form.get("semestre")?.value,
      PER_FECHAFIN: this.form.get("fechaFin")?.value,
      PER_FECHAINICIO: this.form.get("fechaInicio")?.value 
    };

    console.log(periodo);
   
    //if(this.form.valid){
      this.periodoService.addPeriodo(periodo).subscribe({
        next: ()=>{
          this.form.reset();
        }
      })
  //  }
  }
}
