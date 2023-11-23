import { Request, Response } from 'express';
import TipoLabor from '../models/tipoLabor';

// Obtiene todos los tipoLabores
export const getTipoLabores = async (req: Request, res: Response) => {
    // se usa TipoLabor para tomar del modelo sequalize el metodo findAll() y guarda los TipoLabores en la lista
    const listTipoLabores = await TipoLabor.findAll()

    // Enviar en el json el listado de tipoLabores
    res.json(listTipoLabores)
}

// Obtiene un tipoLabor por id
export const getTipoLabor = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const tipoLabor = await TipoLabor.findByPk(id); // Encuentra el tipoLabor por id

    if(tipoLabor) {
        res.json(tipoLabor)
    } else {
        res.status(404).json({
            msg: `No existe un tipoLabor con el id ${id}`
        })
    }
}

// Elimina un tipoLabor
export const deleteTipoLabor = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const tipoLabor = await TipoLabor.findByPk(id); // Encuentra el tipoLabor por id

    if(tipoLabor) {
        await tipoLabor.destroy();
        res.json({
            msg: 'El tipoLabor fue eliminado con exito!'
        })
    } else {
        res.status(404).json({
            msg: `No existe un tipoLabor con el id ${id}`
        })
    }
}

// Crea un tipoLabor
export const createTipoLabor = async (req: Request, res: Response) => {
    const { body } = req; // Obteniendo el id de req

    try {
        await TipoLabor.create(body); // Crea el tipoLabor
        res.json({
            msg: 'El tipoLabor fue creado con exito'
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        })
    }
}

// Actualiza los datos de un tipoLabor
export const updateTipoLabor = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const { body } = req; // Obteniendo el id de req

    try {
        const tipoLabor = await TipoLabor.findByPk(id); // Encuentra el tipoLabor por id

        if(tipoLabor) {
            await tipoLabor.update(body);
            res.json({
                msg: 'El tipoLabor fue editado con exito!'
            })
        } else {
            res.status(404).json({
                msg: `No existe un tipoLabor con el id ${id}`
            })
        }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        })
    }
}