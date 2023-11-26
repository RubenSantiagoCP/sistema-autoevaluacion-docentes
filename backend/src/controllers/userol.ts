import { Request, Response } from 'express';
import Useuserol from '../models/userol';

// Obtiene todos los useroles
export const getUseuseroles = async (req: Request, res: Response) => {
    // se usa Useuserol para tomar del modelo sequalize el metodo findAll() y guarda los Useuseroles en la lista
    const listUseuseroles = await Useuserol.findAll()

    // Enviar en el json el listado de useroles
    res.json(listUseuseroles)
}

// Obtiene un Userol por id
export const getUseuserol = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const userol = await Useuserol.findByPk(id); // Encuentra el userol por id

    if(userol) {
        res.json(userol)
    } else {
        res.status(404).json({
            msg: `No existe un userol con el id ${id}`
        })
    }
}

// Elimina un userol
export const deleteUseuserol = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const userol = await Useuserol.findByPk(id); // Encuentra el userol por id

    if(userol) {
        await userol.destroy();
        res.json({
            msg: 'El userol fue eliminado con exito!'
        })
    } else {
        res.status(404).json({
            msg: `No existe un userol con el id ${id}`
        })
    }
}

// Crea un userol
export const createUseuserol = async (req: Request, res: Response) => {
    const { body } = req; // Obteniendo el id de req

    try {
        await Useuserol.create(body); // Crea el userol
        res.json({
            msg: 'El userol fue creado con exito'
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        })
    }
}

// Actualiza los datos de un userol
export const updateUseuserol = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const { body } = req; // Obteniendo el id de req

    try {
        const userol = await Useuserol.findByPk(id); // Encuentra el userol por id

        if(userol) {
            await userol.update(body);
            res.json({
                msg: 'El userol fue editado con exito!'
            })
        } else {
            res.status(404).json({
                msg: `No existe un userol con el id ${id}`
            })
        }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        })
    }
}
