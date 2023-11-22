import { Component } from '@angular/core';
import { Periodo } from '../../../interfaces/periodo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.component.html',
  styleUrl: './periodo.component.css'
})
export class PeriodoComponent {
   lstPeriodos:Periodo[] = [
   ];

   form: FormGroup;
   constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      anio: ['', [Validators.max(30), Validators.required]],
      nombre: ['', [Validators.max(30), Validators.required]],
      fechaInicio: ['', [Validators.max(30), Validators.required]],
      fechaFin: ['', [Validators.max(30), Validators.required]],
      semestre: ['', [Validators.max(30), Validators.required]]
    });
  }

  ngOnInit(): void {}

  guardarPeriodo(){
    
  }
}
