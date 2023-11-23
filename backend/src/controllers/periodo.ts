import { Request, Response } from 'express';
import Periodo from '../models/periodo';

// Obtiene todos los periodos
export const getPeriodos = async (req: Request, res: Response) => {
    // se usa Periodo para tomar del modelo sequalize el metodo findAll() y guarda los Periodos en la lista
    const listPeriodos = await Periodo.findAll()

    // Enviar en el json el listado de periodo
    res.json(listPeriodos)
}

// Obtiene un periodo por id
export const getPeriodo = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const periodo = await Periodo.findByPk(id); // Encuentra el periodo por id

    if(periodo) {
        res.json(periodo)
    } else {
        res.status(404).json({
            msg: `No existe un periodo con el id ${id}`
        })
    }
}

// Elimina un periodo
export const deletePeriodo = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const periodo = await Periodo.findByPk(id); // Encuentra el periodo por id

    if(periodo) {
        await periodo.destroy();
        res.json({
            msg: 'El periodo fue eliminado con exito!'
        })
    } else {
        res.status(404).json({
            msg: `No existe un periodo con el id ${id}`
        })
    }
}

// Crea un periodo
export const createPeriodo = async (req: Request, res: Response) => {
    const { body } = req; // Obteniendo el id de req

    try {
        await Periodo.create(body); // Crea el periodo
        res.json({
            msg: 'El periodo fue creado con exito'
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        })
    }
}

// Actualiza los datos de un periodo
export const updatePeriodo = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const { body } = req; // Obteniendo el id de req

    try {
        const periodo = await Periodo.findByPk(id); // Encuentra el periodo por id

        if(periodo) {
            await periodo.update(body);
            res.json({
                msg: 'El periodo fue editado con exito!'
            })
        } else {
            res.status(404).json({
                msg: `No existe un periodo con el id ${id}`
            })
        }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        })
    }
}