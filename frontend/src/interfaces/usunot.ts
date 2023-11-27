export interface Notificaciones{
    NOT_ID?: number;
    NOT_TIPO: string;
    NOT_DESCRIPCION: string;
}
export interface Usunot {
    USUNOT_ID?: number;
    USU_ID: number;
    NOT_ID: number;
    USUNOT_FECHA: Date;
    USUNOT_ESTADO: number;
    usuario?: UserNotificacion;
    notificacion?: Notificaciones;
}

export interface UserNotificacion {
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
  }   