import { Router } from "express";
import { createNotificacion, deleteNotificacion, getNotificacion, getNotificaciones, /*updateNotificacion ,*/ getNotificacionDetallado} from "../controllers/notificacion";

const router = Router();

// Se va a los metodos del controlador labor.ts, 
router.get('/', getNotificaciones)
router.get('/:id', getNotificacion)
router.delete('/:id', deleteNotificacion)
router.post('/', createNotificacion)
//router.put('/:id', updateNotificacion);
router.get('/detallado/get', getNotificacionDetallado);

export default router;