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

  formatearFecha(fecha?: Date): string | undefined {
    if (fecha) {
      const dia = fecha.getDate();
      const mes = fecha.getMonth() + 1; // Los meses comienzan desde 0
      const anio = fecha.getFullYear() % 100; // Obtenemos solo los últimos dos dígitos del año

      // Agregamos ceros a la izquierda si es necesario (para asegurar dos dígitos)
      const diaString = dia < 10 ? `0${dia}` : dia.toString();
      const mesString = mes < 10 ? `0${mes}` : mes.toString();
      const anioString = anio < 10 ? `0${anio}` : anio.toString();

      // Formateamos la fecha como dd/mm/yy
      return `${diaString}/${mesString}/${anioString}`;
    }

    return '';
  }
}
