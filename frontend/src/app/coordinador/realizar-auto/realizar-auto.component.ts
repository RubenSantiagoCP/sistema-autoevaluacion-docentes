import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Usuario } from '../../../interfaces/sesion';
import { Periodo } from '../../../interfaces/periodo';
import { Evaluacion } from '../../../interfaces/evaluacion';
import { Labor } from '../../../interfaces/labor';
import { TipoLabor } from '../../../interfaces/tipoLabor';
import { Userol } from '../../../interfaces/userol';
import { DocenteService } from '../../services/docente.service';
import { ActivatedRoute } from '@angular/router';
import { EvaluacionService } from '../../services/evaluacion.service';
import { UserolService } from '../../services/userol.service';
import { SesionService } from '../../services/sesion.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-realizar-auto',
  templateUrl: './realizar-auto.component.html',
  styleUrl: './realizar-auto.component.css'
})
export class RealizarAutoComponent {
  docente?:any;
  periodo?: Periodo;
  lstEvaluaciones?: Evaluacion[] =[];
  lstLabores?: Labor[] = [];
  lstTipoLabores?: TipoLabor[] = [];
  lstUserRol?: Userol[] = [];
  useRol?: Userol;
  resultados:string = "";
  evaluacion:number = 0;

  constructor( private lstlabores: ItemService, private docenteService: DocenteService, private aRouter: ActivatedRoute, private evaluacionService: EvaluacionService, private userolService: UserolService, private sesionService: SesionService,  private toastr: ToastrService) {
    this.ngOnInit();
    this.evaluacionService.setDocente(this.docente);
    console.log(this.docente);
    this.useRol = this.docenteService.getUseRolSelecionado();
    console.log("Valor del userol: ");
    console.log(this.useRol);
    console.log("This docente: "+ this.docente);
    this.periodo = this.evaluacionService.getPeriodo();
    this.lstLabores = this.obtenerLabores();
    this.lstTipoLabores = this.obtenerTiposLabor();
    this.obtenerEvaluaciones(); 
  }

  ngOnInit(){
    
    this.sesionService.currentUserData.subscribe({
      next: (UserData) =>{
        this.docente = this.sesionService.decodeToken(UserData);
      }
    })
  }

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

  calcularHoras():number{
    return 1;
  }

  obtenerEvaluaciones() {
      let lstusuroles: Userol[] = [];
        this.userolService.getUseRoles().subscribe({
          next: (docenteData) => {
            lstusuroles = docenteData;
            console.log(lstusuroles);
            for(let i = 0; i<lstusuroles.length; i++){
              console.log(this.docente?.id);
              if(lstusuroles[i].USU_ID===this.docente?.id){
                console.log("entra");
                this.docenteService.setUseRolSeleccionado(lstusuroles[i]);
                this.evaluacionService.getEvaluacionesPeriodo(lstusuroles[i].USEROL_ID, this.periodo?.PER_ID).subscribe({
                  next: (periodosData) => {
                    this.lstEvaluaciones = periodosData;
                  },
                });
                break;
              } 
            }
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
  realizarAutoevaluacion(item:Evaluacion){
    item.EVA_RESULTADO = this.resultados;
    item.EVA_PUNTAJE = this.evaluacion;
    item.EVA_ESTADO = 2;

    this.evaluacionService.editEvaluacion(item).subscribe({
      next: () => {
        
      }
    })
   
    this.toastr.success('Se realizo la evluacion con exito');
  }
}
