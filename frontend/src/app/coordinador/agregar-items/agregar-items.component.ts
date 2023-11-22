import { Component } from '@angular/core';
import { LaborService } from '../../services/labor.service';

@Component({
  selector: 'app-agregar-items',
  templateUrl: './agregar-items.component.html',
  styleUrl: './agregar-items.component.css'
})
export class AgregarItemsComponent {
  filtroNombre: string = '';
  seleccionLabor: boolean = false;
  lstLabores = this.laborService.getLstLabores();
  itemSeleccionado:number = 0;

  constructor (private laborService: LaborService){

  }

  mostrarInfo(valor:number){
    this.seleccionLabor = true;
    this.itemSeleccionado = valor;
  }

  agregarItem(){
    
  }
}
