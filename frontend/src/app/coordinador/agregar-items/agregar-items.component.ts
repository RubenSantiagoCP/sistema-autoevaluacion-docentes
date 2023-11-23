import { Component } from '@angular/core';
import { LaborService } from '../../services/labor.service';
import { Labor } from '../../../interfaces/labor';
import { TipoLabor } from '../../../interfaces/tipoLabor';
import { TipoLaborService } from '../../services/tipo-labor.service';

@Component({
  selector: 'app-agregar-items',
  templateUrl: './agregar-items.component.html',
  styleUrl: './agregar-items.component.css'
})
export class AgregarItemsComponent {
  filtroNombre: string = '';
  seleccionLabor: boolean = false;
  lstLabores:Labor[] =[];
  lstTipoLabores: TipoLabor[] = [];
  itemSeleccionado:number = 0;

  constructor (private laborService: LaborService, private tipolabortService: TipoLaborService){
    this.obtenerLabores();
    this.obtenerTipoLabor();
  }

  mostrarInfo(valor:number){
    this.seleccionLabor = true;
    this.itemSeleccionado = valor;
  }

  
  obtenerLabores() {
    this.laborService.getLabores().subscribe({
      next: (laborData) => {
        this.lstLabores = laborData;
      },
    });
  }

  obtenerTipoLabor(){
    this.tipolabortService.getTipoLabores().subscribe({
      next: (tipoLaborData) => {
          this.lstTipoLabores = tipoLaborData;
      },
    });
  }

  tipoLaborCodigo(id:any):any{
    for(let item of this.lstTipoLabores  ){
        if(item.TL_ID === parseInt(id)){
          return item.TL_CODIGO;
        }
    }
    return '';
  }

  tipoLaborDescripcion(id:any):any{
    for(let item of this.lstTipoLabores  ){
        if(item.TL_ID === parseInt(id)){
          return item.TL_DESCRIPCION;
        }
    }
    return '';
  }

  agregarItem(){

  }

}
