import { Request, Response } from 'express';
import UsuNotificacion from '../models/usunot';

// Obtiene todas las usuNotificacions
export const getUsuNotificaciones = async (req: Request, res: Response) => {
    // se usa UsuNotificacion para tomar del modelo sequalize el metodo findAll() y guarda las usuNotificacions en la lista
    const listUsuNotificaciones = await UsuNotificacion.findAll()

    // Enviar en el json el listado de usuNotificacions
    res.json(listUsuNotificaciones)
}

// Obtiene una usuNotificacion por id
export const getUsuNotificacion = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const usuNotificacion = await UsuNotificacion.findByPk(id); // Encuentra la usuNotificacion por id

    if(usuNotificacion) {
        res.json(usuNotificacion)
    } else {
        res.status(404).json({
            msg: `No existe una usuNotificacion con el id ${id}`
        })
    }
}

// Elimina una usuNotificacion
export const deleteUsuNotificacion = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const usuNotificacion = await UsuNotificacion.findByPk(id); // Encuentra la usuNotificacion por id

    if(usuNotificacion) {
        await usuNotificacion.destroy();
        res.json({
            msg: 'La usuNotificacion fue eliminado con exito!'
        })
    } else {
        res.status(404).json({
            msg: `No existe una usuNotificacion con el id ${id}`
        })
    }
}

// Crea una usuNotificacion
export const createUsuNotificacion = async (req: Request, res: Response) => {
    const { body } = req; // Obteniendo el id de req

    try {
        await UsuNotificacion.create(body); // Crea la usuNotificacion
        res.json({
            msg: 'La usuNotificacion fue creada con exito'
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        })
    }
}

// Actualiza los datos de una usuNotificacion
export const updateUsuNotificacion = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const { body } = req; // Obteniendo el id de req

    try {
        const usuNotificacion = await UsuNotificacion.findByPk(id); // Encuentra la usuNotificacion por id

        if(usuNotificacion) {
            await usuNotificacion.update(body);
            res.json({
                msg: 'La usuNotificacion fue editado con exito!'
            })
        } else {
            res.status(404).json({
                msg: `No existe una usuNotificacion con el id ${id}`
            })
        }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        })
    }
}
