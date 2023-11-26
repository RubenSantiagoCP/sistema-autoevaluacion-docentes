import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocenteService } from './docente.service';
import { PeriodoService } from './periodo.service';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionService {

  constructor(private http:HttpClient, private docenteService: DocenteService, private periodoService: PeriodoService) { 
    
  }
}
