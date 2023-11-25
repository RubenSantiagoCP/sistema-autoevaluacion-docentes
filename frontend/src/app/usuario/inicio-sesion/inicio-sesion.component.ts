import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SesionService } from '../../services/sesion.service';
import { Usuario } from '../../../interfaces/sesion';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
})
export class InicioSesionComponent {
  rutaDestino: string = '';
  form: FormGroup;
  userData1: any; // Declarar userData aquí

  constructor(private fb: FormBuilder, private _sesionService: SesionService, private router:Router, private cookieService:CookieService ) {
    this.form = this.fb.group({
      user: ['', [Validators.maxLength(30), Validators.required]],
      password: ['', [Validators.maxLength(30), Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  iniciarSesion() {
    const username = this.form.get('user')?.value;
    const password = this.form.get('password')?.value;

    console.log('Usuario:', username);
    console.log('Contraseña:', password);

    // Llamar al servicio de autenticación
    this._sesionService.login(username, password).subscribe({
      next: (userData) =>{
        console.log(userData);
        this.userData1= this.decodeToken(userData); 
        this.cookieService.set('token_access', userData, 4, '/');
        this.cookieService.set('token_user', this.userData1.USU_TIPOUSUARIO, 4, '/');
        console.log(userData);
      },
      error:(errorData) =>{
        console.error(errorData);
      },
      complete: () =>{
        if(this.userData1?.tipoUsu===1){
          this.router.navigateByUrl("/coordinador");
          console.log("entro");
        }else if(this.userData1?.tipoUsu===2){
          this.router.navigateByUrl("/docente");
        }
      }  
    }

    );
  }

  decodeToken(token: string): any {
    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) {
      console.error('Token no válido. No tiene el formato esperado.');
      return null;
    }

    const payload = atob(tokenParts[1]);
    return JSON.parse(payload);
  }
}