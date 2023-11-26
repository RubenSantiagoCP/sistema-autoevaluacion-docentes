import { Router } from "express";
import { createUsuario, deleteUsuario, getUsuario, updateUsuarioEstadoById, getUsuarioByIdentificacion, getUsuarios, updateUsuario } from "../controllers/usuario";

const router = Router();

// Se va a los metodos del controlador usuario.ts, 
router.get('/ident/:identificacion', getUsuarioByIdentificacion);
router.get('/estado/:id', updateUsuarioEstadoById);
router.get('/:id', getUsuario);
router.get('/', getUsuarios);
router.delete('/:id', deleteUsuario);
router.post('/', createUsuario);
router.put('/:id', updateUsuario);

export default router;