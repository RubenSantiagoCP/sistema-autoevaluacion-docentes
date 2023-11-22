import { Component } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-revisar-items',
  templateUrl: './revisar-items.component.html',
  styleUrl: './revisar-items.component.css'
})
export class RevisarItemsComponent {
  item = { estado: 'terminada' }; // Establece el valor por defecto aquí

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
