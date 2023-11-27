import { Router } from "express";
import { createUsuario, deleteUsuario, getUsuario, updateUsuarioEstadoById, getUsuarioByIdentificacion, getUsuarios, updateUsuario, getUsuarioDetallado, getUsuarioByType } from "../controllers/usuario";

const router = Router();

// Se va a los metodos del controlador usuario.ts, 
router.get('/ident/:identificacion', getUsuarioByIdentificacion);
router.get('/estado/:id', updateUsuarioEstadoById);
router.get('/:id', getUsuario);
router.get('/', getUsuarios);
router.get('/type/:type', getUsuarioByType);
router.delete('/:id', deleteUsuario);
router.post('/', createUsuario);
router.put('/:id', updateUsuario);
router.get('/detallado/get', getUsuarioDetallado);

export default router;