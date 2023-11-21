import { Request, Response } from 'express';
import Usuario from '../models/usuario';
import bcrypt from 'bcrypt';

// Obtiene todos los usuarios
export const getUsuarios = async (req: Request, res: Response) => {
    // se usa Usuario para tomar del modelo sequalize el metodo findAll() y guarda los usuarios en la lista
    const listUsuarios = await Usuario.findAll()

    // Enviar en el json el listado de usuarios
    res.json(listUsuarios)
}

// Obtiene un usuario por id
export const getUsuario = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const usuario = await Usuario.findByPk(id); // Encuentra el usuario por id

    if(usuario) {
        res.json(usuario)
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        })
    }
}

// Elimina un usuario
export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const usuario = await Usuario.findByPk(id); // Encuentra el usuario por id

    if(usuario) {
        await usuario.destroy();
        res.json({
            msg: 'El usuario fue eliminado con exito!'
        })
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        })
    }
}

// Crea un usuario
export const createUsuario = async (req: Request, res: Response) => {
    const { body } = req; // Obteniendo el id de req

    try {
        // Hashear la contraseña antes de almacenarla
        const hashedPassword = bcrypt.hashSync(body.USU_CLAVE, 10); // '10' es el costo del hashing

        // Reemplazar la contraseña sin hashear con la hasheada
        body.USU_CLAVE = hashedPassword;
        
        // Crear el usuario con la contraseña hasheada
        await Usuario.create(body); // Crea el usuario

        res.json({
            msg: 'El usuario fue creado con exito'
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        })
    }

}

export const updateUsuario = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const { body } = req; // Obteniendo el id de req

    try {
        const usuario = await Usuario.findByPk(id); // Encuentra el usuario por id

        if(usuario) {

            // Si se proporciona una nueva contraseña, hashearla antes de actualizar
            if (body.USU_CLAVE) {
                const hashedPassword = bcrypt.hashSync(body.USU_CLAVE, 10);
                body.USU_CLAVE = hashedPassword;
            }

            await usuario.update(body);
            res.json({
                msg: 'El usuario fue editado con exito!'
            })
        } else {
            res.status(404).json({
                msg: `No existe un usuario con el id ${id}`
            })
        }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        })
    }
}
