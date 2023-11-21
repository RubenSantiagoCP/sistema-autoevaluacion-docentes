import { Router } from "express";
import { createEvaluacion, deleteEvaluacion, getEvaluacion, getEvaluaciones, updateEvaluacion } from "../controllers/evaluacion";

const router = Router();

// Se va a los metodos del controlador usuario.ts, 
router.get('/', getEvaluaciones)
router.get('/:id', getEvaluacion)
router.delete('/:id', deleteEvaluacion)
router.post('/', createEvaluacion)
router.put('/:id', updateEvaluacion);

export default router;