import { Router } from "express";
import { createLabor, deleteLabor, getLabor, getLabores, updateLabor } from "../controllers/labor";

const router = Router();

// Se va a los metodos del controlador labor.ts, 
router.get('/', getLabores)
router.get('/:id', getLabor)
router.delete('/:id', deleteLabor)
router.post('/', createLabor)
router.put('/:id', updateLabor);

export default router;