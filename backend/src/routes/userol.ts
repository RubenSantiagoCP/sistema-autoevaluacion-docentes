import { Router } from "express";
import { createUseuserol, deleteUseuserol, getUseuserol, getUseuseroles, updateUseuserol } from "../controllers/userol";

const router = Router();

// Se va a los metodos del controlador tipolabor.ts, 
router.get('/', getUseuseroles)
router.get('/:id', getUseuserol)
router.delete('/:id', deleteUseuserol)
router.post('/', createUseuserol)
router.put('/:id', updateUseuserol);

export default router;