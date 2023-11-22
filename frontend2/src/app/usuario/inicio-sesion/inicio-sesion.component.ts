import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../interfaces/usuarios';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.css',
})
export class InicioSesionComponent {
  rutaDestino:string = '';
  form: FormGroup;
  lstUsuarios: Usuario[] = [
    { user: 'usuario1', password: 'contrasena1' },
    { user: 'usuario2', password: 'contrasena2' },
    { user: 'usuario3', password: 'contrasena3' },
    { user: 'usuario4', password: 'contrasena4' },
    { user: 'usuario5', password: 'contrasena5' },
    { user: 'usuario6', password: 'contrasena6' },
    { user: 'usuario7', password: 'contrasena7' },
    { user: 'usuario8', password: 'contrasena8' },
    { user: 'usuario9', password: 'contrasena9' },
    { user: 'usuario10', password: 'contrasena10' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      user: ['', [Validators.max(30), Validators.required]],
      password: ['', [Validators.max(30), Validators.required]],
    });
  }

  ngOnInit(): void {}

  iniciarSesion() {
    const username = this.form.get('user')?.value;
    const password = this.form.get('password')?.value;

    const usuarioEncontrado = this.lstUsuarios.find(
      user => user.user === username && user.password === password
    );

    if (usuarioEncontrado) {
      console.log('Inicio de sesión exitoso:', usuarioEncontrado);
      this.rutaDestino = '/docente';
    } else {
      console.log('Usuario o contraseña incorrectos');
    }
  }
}
