// EmailController.ts
import { Request, Response } from 'express';
import { sendEmailToProfessor, sendEmailToCordinator, sendEmailToRector } from '../models/util/sendEmail'; // Reemplaza con la ruta correcta

export const sendEmailToAllProfessors = async (req: Request, res: Response): Promise<void> => {
    try {
        const professors = req.body.users;
        for (let professor of professors) {
            await sendEmailToProfessor(professor);
        }
        res.status(200).json({ message: 'Correos enviados con éxito' });
    } catch (error) {
        //console.log(error);
        res.status(500).json({ error: 'Error al enviar correos' });
    }
};

// Puedes agregar métodos similares para sendEmailToCordinator y sendEmailToRector
