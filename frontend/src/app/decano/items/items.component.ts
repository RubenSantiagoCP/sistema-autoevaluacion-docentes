import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Usuario } from '../../../interfaces/sesion';
import { DocenteService } from '../../services/docente.service';

import { ActivatedRoute, Router } from '@angular/router';
import { EvaluacionService } from '../../services/evaluacion.service';
import { Periodo } from '../../../interfaces/periodo';
import { Evaluacion } from '../../../interfaces/evaluacion';
import { Labor } from '../../../interfaces/labor';
import { TipoLabor } from '../../../interfaces/tipoLabor';
import { UserolService } from '../../services/userol.service';
import { Userol } from '../../../interfaces/userol';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  docente?:Usuario;
  periodo?: Periodo;
  lstEvaluaciones?: Evaluacion[] =[];
  lstLabores?: Labor[] = [];
  lstTipoLabores?: TipoLabor[] = [];
  lstUserRol?: Userol[] = [];
  useRol?: Userol;

  constructor(private lstlabores: ItemService, private docenteService: DocenteService, private router: Router, private evaluacionService: EvaluacionService) {
    
    this.docente = evaluacionService.getDocente();
    this.periodo = evaluacionService.getPeriodo();
    this.lstLabores = this.obtenerLabores();
    this.lstTipoLabores = this.obtenerTiposLabor();
    this.useRol = docenteService.getUseRolSelecionado();
    this.obtenerEvaluaciones();
    console.log(this.docente?.USU_APELLIDO);
  }
  tablasVisibles: boolean[] = [];

  mostrarTablas(index: number): void {
    this.tablasVisibles[index] = true;
    console.log(this.docente?.USU_APELLIDO);
  }

  ocultarTablas(index: number): void {
    this.tablasVisibles[index] = false;
  }

  ocultarTodo() {
    for (let i = 0; i < this.tablasVisibles.length; i++) {
      this.tablasVisibles[i] = false;
    }
  }

  eliminarItem(id?:number){
    this.evaluacionService.deleteEvaluacion(id).subscribe({
      next: () => {
        this.router.navigate(["/coordinador/modulo/docente/items"]);
      },
    });
  }

  laboresDocente = this.lstlabores.getLabores();

  calcularHoras():number{
    return 1;
  }

  obtenerEvaluaciones() {
    this.evaluacionService.getEvaluacionDocente(this.useRol?.USEROL_ID).subscribe({
      next: (periodosData) => {
        this.lstEvaluaciones = periodosData;
      },
    });
  }

  obtenerLabores(): any{
    this.evaluacionService.getLstLabores().subscribe({
      next: (periodosData) => {
        this.lstLabores = periodosData;
      },
    });
  }

  obtenerTiposLabor():any {
    this.evaluacionService.getLstTipoLabores().subscribe({
      next: (periodosData) => {
        this.lstTipoLabores = periodosData;
      },
    });
  }

  obtenerUseRol() {
    this.evaluacionService.getLstUserol().subscribe({
      next: (periodosData) => {
        this.lstUserRol = periodosData;
      },
    });
  }

  obtenerInfoLabor(id:number):any{
    return this.lstLabores?.find(labor => labor.LAB_ID ===id);
  }

  obtenerInfoTipoLabor(id:number){
    return this.lstTipoLabores?.find(labor => labor.TL_ID ===id);

  }

  definirEstado(estado:number){
    if(estado===1){
      return "En ejecucion";
    }else if(estado===2){
      return "Terminado"
    }else if (estado===3){
      return "Cerrado"
    }else{
      return "No valido";
    }
  }
}
