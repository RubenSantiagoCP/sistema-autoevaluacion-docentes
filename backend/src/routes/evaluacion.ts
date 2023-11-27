import { Router } from "express";
import { createEvaluacion, deleteEvaluacion, getEvaluacion, getEvaluacionByPeriodoUser, getEvaluacionByUseRol, getEvaluaciones, updateEvaluacion } from "../controllers/evaluacion";

const router = Router();

// Se va a los metodos del controlador usuario.ts, 
router.get('/', getEvaluaciones)
router.get('/userol/:userol', getEvaluacionByUseRol)
router.get('/:periodo/:userol', getEvaluacionByPeriodoUser)
router.get('/:id', getEvaluacion)
router.delete('/:id', deleteEvaluacion)
router.post('/', createEvaluacion)
router.put('/:id', updateEvaluacion);

export default router;