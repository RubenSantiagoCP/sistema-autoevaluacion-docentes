import { Component } from '@angular/core';
import { Periodo } from '../../../interfaces/periodo';
import { PeriodoService } from '../../services/periodo.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-selec-periodo',
  templateUrl: './selec-periodo.component.html',
  styleUrl: './selec-periodo.component.css'
})
export class SelecPeriodoComponent {
  lstPeriodos: Periodo[] = [];
  constructor(private periodoService: PeriodoService,private router: Router,  private route: ActivatedRoute) {
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
    // Realiza cualquier acción adicional que necesites con el item seleccionado
  // ...

  // Obtiene la ruta activa actual
  const rutaActual = this.route.snapshot.routeConfig?.path;
  console.log(rutaActual);

  // Verifica si la ruta actual no es nula o indefinida
  if (rutaActual) {
    // Construye la nueva ruta basándote en la ruta actual
    let nuevaRuta: string;

    if (rutaActual === 'autoevaluacion') {
      nuevaRuta = '/docente/autoevaluacion/realizar'; // Modifica según tu estructura de rutas
    }else {
      nuevaRuta = '/docente'; // Ruta por defecto si no estás en una ruta específica
    }

    // Navega a la nueva ruta
    this.router.navigate([nuevaRuta]);
  } else {
    console.error('La ruta actual no está definida.');
    // Manejo de error o acción adicional si es necesario*/
  }}
}
