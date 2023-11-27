// Define el tipo Usuario con las propiedades que deseas
export interface Usuario {
    USU_ID?: number;
    USR_IDENTIFICACION: number;
    USU_NOMBRE: string;
    USU_APELLIDO: string;
    USU_GENERO: string;
    USU_ESTUDIO: string;
    USU_TIPOID: string;
    USU_FOTO: string;
    USU_CLAVE: string;
    USU_CORREO: string;
    USU_ESTADO: number;
    USU_TIPOUSUARIO: number;
    USU_ROLID?:number;
  }
  
  // Define el tipo Sesion con la propiedad 'token' y 'usuario'
  export interface Sesion {
    token: string;
    usuario: Usuario;
  }