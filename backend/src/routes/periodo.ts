import { Router } from "express";
import { createPeriodo, deletePeriodo, getPeriodo, getPeriodos, updatePeriodo } from "../controllers/periodo";

const router = Router();

// Se va a los metodos del controlador usuario.ts, 
router.get('/', getPeriodos)
router.get('/:id', getPeriodo)
router.delete('/:id', deletePeriodo)
router.post('/', createPeriodo)
router.put('/:id', updatePeriodo);

export default router;