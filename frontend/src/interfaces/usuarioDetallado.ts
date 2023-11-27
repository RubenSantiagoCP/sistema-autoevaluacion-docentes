export interface Evaluacion  {
    EVA_ID?: number;
    LAB_ID: number;
    PER_ID: number;
    USEROL_ID: number;
    EVA_ESTADO: number;
    EVA_PUNTAJE: number;
    EVA_RESULTADO: string;
    EVA_EVIDENCIA: string;
}
  export interface Userol {
    USEROL_ID?: number;
    USU_ID: number;
    ROL_ID: number;
    UR_FECHAINICIO: Date;
    UR_FECHAFIN: Date;
    evaluacions?: Evaluacion[];
  }
  export interface UsuarioDetallado {
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
      userols?: Userol[];
    }   
