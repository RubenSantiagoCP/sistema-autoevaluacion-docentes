import { Request, Response } from 'express';
import Rol from '../models/rol';

// Obtiene todos los roles
export const getRoles = async (req: Request, res: Response) => {
    // se usa Rol para tomar del modelo sequalize el metodo findAll() y guarda los Roles en la lista
    const listRoles = await Rol.findAll()

    // Enviar en el json el listado de roles
    res.json(listRoles)
}

// Obtiene un Rol por id
export const getRol = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const rol = await Rol.findByPk(id); // Encuentra el rol por id

    if(rol) {
        res.json(rol)
    } else {
        res.status(404).json({
            msg: `No existe un rol con el id ${id}`
        })
    }
}

// Elimina un rol
export const deleteRol = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const rol = await Rol.findByPk(id); // Encuentra el rol por id

    if(rol) {
        await rol.destroy();
        res.json({
            msg: 'El rol fue eliminado con exito!'
        })
    } else {
        res.status(404).json({
            msg: `No existe un rol con el id ${id}`
        })
    }
}

// Crea un rol
export const createRol = async (req: Request, res: Response) => {
    const { body } = req; // Obteniendo el id de req

    try {
        await Rol.create(body); // Crea el rol
        res.json({
            msg: 'El rol fue creado con exito'
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        })
    }
}

// Actualiza los datos de un rol
export const updateRol = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const { body } = req; // Obteniendo el id de req

    try {
        const rol = await Rol.findByPk(id); // Encuentra el rol por id

        if(rol) {
            await rol.update(body);
            res.json({
                msg: 'El rol fue editado con exito!'
            })
        } else {
            res.status(404).json({
                msg: `No existe un rol con el id ${id}`
            })
        }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        })
    }
}
