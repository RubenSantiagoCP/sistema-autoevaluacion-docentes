import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-realizar-autoev',
  templateUrl: './realizar-autoev.component.html',
  styleUrl: './realizar-autoev.component.css'
})
export class RealizarAutoevComponent {
  constructor(private lstlabores: ItemService) {}
  tablasVisibles: boolean[] = [];

  mostrarTablas(index: number): void {
    this.tablasVisibles[index] = true;
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
