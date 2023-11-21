import { Router } from "express";
import { createUsuario, deleteUsuario, getUsuario, getUsuarios, updateUsuario } from "../controllers/usuario";

const router = Router();

// Se va a los metodos del controlador usuario.ts, 
router.get('/', getUsuarios)
router.get('/:id', getUsuario)
router.delete('/:id', deleteUsuario)
router.post('/', createUsuario)
router.put('/:id', updateUsuario);

export default router;