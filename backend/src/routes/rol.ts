import { Router } from "express";
import { createRol, deleteRol, getRol, getRoles, updateRol } from "../controllers/rol";

const router = Router();

// Se va a los metodos del controlador rol.ts, 
router.get('/', getRoles)
router.get('/:id', getRol)
router.delete('/:id', deleteRol)
router.post('/', createRol)
router.put('/:id', updateRol);

export default router;