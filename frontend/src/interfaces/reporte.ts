import { Evaluacion } from "./evaluacion";
import { Usuario } from "./sesion";
import { Userol } from "./userol";

export interface Reporte{
    usuario: Usuario;
    usurol: Userol;
    evluacion: Evaluacion[];
}