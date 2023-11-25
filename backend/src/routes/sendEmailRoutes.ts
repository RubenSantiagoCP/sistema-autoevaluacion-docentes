// emailRoutes.ts
import express from 'express';
import * as emailController from '../controllers/senEmailsController'; // Reemplaza con la ruta correcta

const router = express.Router();

router.post('/sendToAllProfessors', emailController.sendEmailToAllProfessors);

// Define aquí rutas adicionales si es necesario

export default router;
