import { Router } from "express";
import { createUsuNotificacion, deleteUsuNotificacion, getUsuNotificacion, getUsuNotificaciones, updateUsuNotificacion } from "../controllers/usunot";

const router = Router();

// Se va a los metodos del controlador labor.ts, 
router.get('/', getUsuNotificaciones)
router.get('/:id', getUsuNotificacion)
router.delete('/:id', deleteUsuNotificacion)
router.post('/', createUsuNotificacion)
router.put('/:id', updateUsuNotificacion);

export default router;