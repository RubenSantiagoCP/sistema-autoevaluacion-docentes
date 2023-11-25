import { Component } from '@angular/core';
import { Periodo } from '../../../interfaces/periodo';
import { PeriodoService } from '../../services/periodo.service';

@Component({
  selector: 'app-ges.periodo',
  templateUrl: './ges.periodo.component.html',
  styleUrl: './ges.periodo.component.css'
})
export class GesPeriodoComponent {
  lstPeriodos: Periodo[] = [];

  constructor(private periodoService: PeriodoService) {
    this.obtenerPeriodosAcad();
  }

  obtenerPeriodosAcad() {
    this.periodoService.getPeriodos().subscribe({
      next: (periodosData) => {
        this.lstPeriodos = periodosData;
      },
    });
  }
}
