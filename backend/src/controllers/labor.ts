import { Request, Response } from 'express';
import Labor from '../models/labor';

// Obtiene todas las labores
export const getLabores = async (req: Request, res: Response) => {
    // se usa Labor para tomar del modelo sequalize el metodo findAll() y guarda las labores en la lista
    const listLabores = await Labor.findAll()

    // Enviar en el json el listado de labores
    res.json(listLabores)
}

// Obtiene una labor por id
export const getLabor = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const labor = await Labor.findByPk(id); // Encuentra la labor por id

    if(labor) {
        res.json(labor)
    } else {
        res.status(404).json({
            msg: `No existe una labor con el id ${id}`
        })
    }
}

// Elimina una labor
export const deleteLabor = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const labor = await Labor.findByPk(id); // Encuentra la labor por id

    if(labor) {
        await labor.destroy();
        res.json({
            msg: 'La labor fue eliminado con exito!'
        })
    } else {
        res.status(404).json({
            msg: `No existe una labor con el id ${id}`
        })
    }
}

// Crea una labor
export const createLabor = async (req: Request, res: Response) => {
    const { body } = req; // Obteniendo el id de req

    try {
        await Labor.create(body); // Crea la labor
        res.json({
            msg: 'La labor fue creada con exito'
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        })
    }
}

// Actualiza los datos de una labor
export const updateLabor = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const { body } = req; // Obteniendo el id de req

    try {
        const labor = await Labor.findByPk(id); // Encuentra la labor por id

        if(labor) {
            await labor.update(body);
            res.json({
                msg: 'La labor fue editado con exito!'
            })
        } else {
            res.status(404).json({
                msg: `No existe una labor con el id ${id}`
            })
        }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        })
    }
}
