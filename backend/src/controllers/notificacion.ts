import { Request, Response } from 'express';
import Notificacion from '../models/notificacion';

// Obtiene todas las notificaciones
export const getNotificaciones = async (req: Request, res: Response) => {
    // se usa Notificacion para tomar del modelo sequalize el metodo findAll() y guarda las notificaciones en la lista
    const listNotificaciones = await Notificacion.findAll()

    // Enviar en el json el listado de notificaciones
    res.json(listNotificaciones)
}

// Obtiene una notificacion por id
export const getNotificacion = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const notificacion = await Notificacion.findByPk(id); // Encuentra la notificacion por id

    if(notificacion) {
        res.json(notificacion)
    } else {
        res.status(404).json({
            msg: `No existe una notificacion con el id ${id}`
        })
    }
}

// Elimina una notificacion
export const deleteNotificacion = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const notificacion = await Notificacion.findByPk(id); // Encuentra la notificacion por id

    if(notificacion) {
        await notificacion.destroy();
        res.json({
            msg: 'La notificacion fue eliminado con exito!'
        })
    } else {
        res.status(404).json({
            msg: `No existe una notificacion con el id ${id}`
        })
    }
}

// Crea una notificacion
export const createNotificacion = async (req: Request, res: Response) => {
    const { body } = req; // Obteniendo el id de req

    try {
        await Notificacion.create(body); // Crea la notificacion
        res.json({
            msg: 'La notificacion fue creada con exito'
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        })
    }
}

// Actualiza los datos de una notificacion
export const updateNotificacion = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const { body } = req; // Obteniendo el id de req

    try {
        const notificacion = await Notificacion.findByPk(id); // Encuentra la notificacion por id

        if(notificacion) {
            await notificacion.update(body);
            res.json({
                msg: 'La notificacion fue editado con exito!'
            })
        } else {
            res.status(404).json({
                msg: `No existe una notificacion con el id ${id}`
            })
        }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        })
    }
}
