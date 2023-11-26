import { Component } from '@angular/core';
import { Periodo } from '../../../interfaces/periodo';
import { PeriodoService } from '../../services/periodo.service';

@Component({
  selector: 'app-modulo-autoev',
  templateUrl: './modulo-autoev.component.html',
  styleUrl: './modulo-autoev.component.css',
})
export class ModuloAutoevComponent {
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

  setPeriodoSeleccionado(periodo?: Periodo){
    this.periodoService.setPeriodoSeleccionado(periodo);
  }
}
