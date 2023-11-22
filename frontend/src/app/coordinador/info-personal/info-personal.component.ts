import { Component } from '@angular/core';
import { Usuario } from '../../../interfaces/sesion';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrl: './info-personal.component.css'
})
export class InfoPersonalComponent {
  user?:Usuario;
  errorMessage: string = "";

  constructor(private userService:UserService){
    this.userService.getUser(1).subscribe({
      next: (userData) =>{
        this.user = userData;
      },
      error:(errorData) =>{
        this.errorMessage = errorData;
      },
      complete: () =>{
        console.info("User data ok");
      }
    })
  }
}
