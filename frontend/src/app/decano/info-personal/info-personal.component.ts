import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../interfaces/sesion';
import { UserService } from '../../services/user.service';
import { SesionService } from '../../services/sesion.service';


@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrl: './info-personal.component.css'
})
export class InfoPersonalComponent {
  user?:Usuario;
  errorMessage: string = "";
  idUsuario?:number;
  data_user?:any = '';

  constructor(private userService:UserService, private sesionService:SesionService){
    this.ngOnInit();
    let id = parseInt( this.data_user.id);
    this.userService.getUser(id).subscribe({
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

  ngOnInit(){
    this.sesionService.currentUserData.subscribe({
      next: (UserData) =>{
        this.data_user = this.sesionService.decodeToken(UserData);
      }
    })
  }

  
  diccionarioGenero(genero?:string){
    if(genero=== "M"){
      return "Masculino"
    }else if(genero === "F"){
      return "Femenino";
    }else{
      return "Otros";
    }
  }
}
