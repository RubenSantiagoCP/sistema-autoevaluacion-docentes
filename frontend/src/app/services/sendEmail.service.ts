// email.service.ts

import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:3000/api/sendEmail'; 
  constructor(private http: HttpClient) { }

  sendEmailsToProfessors(professors: any[]): Observable<any> {
    // Asegúrate de que estás usando el parámetro 'professors' aquí
    return this.http.post(`${this.apiUrl}/sendToAllProfessors`, { users: professors });
  }
      
  }
