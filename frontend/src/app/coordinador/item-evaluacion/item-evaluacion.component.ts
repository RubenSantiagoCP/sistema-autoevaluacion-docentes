import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Usuario } from '../../../interfaces/sesion';
import { DocenteService } from '../../services/docente.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-evaluacion', 
  templateUrl: './item-evaluacion.component.html',
  styleUrl: './item-evaluacion.component.css',
})
export class ItemEvaluacionComponent {
  docente?:Usuario;

  constructor(private lstlabores: ItemService, private docenteService: DocenteService, private aRouter: ActivatedRoute) {
    
    this.docente = docenteService.getDocenteSeleccionado();
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

  eliminarItem(){
    
  }

  laboresDocente = this.lstlabores.getLabores();
}
