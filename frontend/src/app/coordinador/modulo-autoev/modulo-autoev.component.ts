import { Component } from '@angular/core';
import { Periodo } from '../../../interfaces/periodo';

@Component({
  selector: 'app-modulo-autoev',
  templateUrl: './modulo-autoev.component.html',
  styleUrl: './modulo-autoev.component.css'
})
export class ModuloAutoevComponent {
  lstPeriodos:Periodo[]=[
    {nombre: '2022-1', semestre: 2, fechaFin: '12/12/2022', fechaInicio: '14/08/2022', anio: 2022},
    {nombre: '2023-1', semestre: 1, fechaFin: '12/06/2023', fechaInicio: '14/02/2023', anio: 2023},
    {nombre: '2023-2', semestre: 2, fechaFin: '12/12/2023', fechaInicio: '14/08/2023', anio: 2023}
  ]

  
}
