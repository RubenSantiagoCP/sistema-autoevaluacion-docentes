import { Router } from "express";
import { createTipoLabor, deleteTipoLabor, getTipoLabor, getTipoLabores, updateTipoLabor } from "../controllers/tipoLabor";

const router = Router();

// Se va a los metodos del controlador tipolabor.ts, 
router.get('/', getTipoLabores)
router.get('/:id', getTipoLabor)
router.delete('/:id', deleteTipoLabor)
router.post('/', createTipoLabor)
router.put('/:id', updateTipoLabor);

export default router;