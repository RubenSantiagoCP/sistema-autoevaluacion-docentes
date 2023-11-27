import { Component } from '@angular/core';
import { LaborService } from '../../services/labor.service';
import { Labor } from '../../../interfaces/labor';
import { TipoLabor } from '../../../interfaces/tipoLabor';
import { TipoLaborService } from '../../services/tipo-labor.service';
import { EvaluacionService } from '../../services/evaluacion.service';
import { Evaluacion } from '../../../interfaces/evaluacion';
import { ToastrService } from 'ngx-toastr';

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
  itemSeleccionado?:Labor;
  filtroTipoLabor?: string = "0";

  constructor (private laborService: LaborService, private tipolabortService: TipoLaborService, private evaluacionService: EvaluacionService, private toastr: ToastrService){
    this.obtenerLabores();
    this.obtenerTipoLabor();
  } 

  mostrarInfo(valor:Labor){
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
    let lab_id:any =this.itemSeleccionado?.LAB_ID;
    let periodo_id:any = this.evaluacionService.getPeriodo()?.PER_ID;
    let userol_id: any = this.evaluacionService.getUseRolSeleccionado()?.USEROL_ID;

      const evaluacion: Evaluacion = {
         LAB_ID:lab_id,
         EVA_ESTADO: 1,
         EVA_EVIDENCIA: '',
         EVA_PUNTAJE: 0,
         EVA_RESULTADO: '',
         PER_ID:periodo_id,
         USEROL_ID: userol_id
      }

      this.evaluacionService.addEvaluacion(evaluacion).subscribe({
        next: () => {
          this.seleccionLabor = false;
        }
      })

      this.toastr.success('Se registró la labor con exito')
  }

  cancelar(){
    this.seleccionLabor = false;
  }
}
