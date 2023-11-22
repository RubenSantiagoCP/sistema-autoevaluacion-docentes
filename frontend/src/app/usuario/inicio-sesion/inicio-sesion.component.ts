import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css'],
})
export class InicioSesionComponent {
  rutaDestino: string = '';
  form: FormGroup;

  constructor(private fb: FormBuilder, private _sesionService: SesionService ) {
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
    this._sesionService.login(username, password).subscribe(
      (response) => {
        console.log('Inicio de sesión exitoso:', response);
        // Aquí puedes manejar el token, redireccionar, etc.
        this.rutaDestino = '/coordinador';
      },
      (error) => {
        console.log('Usuario o contraseña incorrectos');
      }
    );
  }
}
