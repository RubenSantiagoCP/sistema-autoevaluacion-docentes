import { Router } from 'express';
import { login } from '../controllers/autenticacion';

const router = Router();

router.post('/login', login);

export default router;