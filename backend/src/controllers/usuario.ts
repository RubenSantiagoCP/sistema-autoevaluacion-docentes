import { Request, Response } from 'express';
import Usuario from '../models/usuario';
import UserRol from '../models/userol';
import Evaluacion from '../models/evaluacion';
import bcrypt from 'bcrypt';


export const getUsuarioDetallado = async (req: Request, res: Response) => {
    try{
        const usuarios = await Usuario.findAll({
            include: [{
              model: UserRol,
              include: [{
                model: Evaluacion,
              }]
            }],
          })
            .then((usuarios) => {
              res.json(usuarios);   
            })
            .catch((error) => {
              console.error('Error al realizar INNER JOIN:', error);
            });
          
    }catch(error){
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con asd'
        })
    }
}


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

// Obtiene un usuario por USR_IDENTIFICACION
export const getUsuarioByIdentificacion = async (req: Request, res: Response) => {
    const { identificacion } = req.params; // Obteniendo la identificación de req
    const identificacionNumber = parseFloat(identificacion);
    console.log('Identificación:', identificacionNumber);
    try {
        const usuario = await Usuario.findOne({
            where: {
                USR_IDENTIFICACION: identificacionNumber,
            },
        });

        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({
                msg: `No existe un usuario con la identificación ${identificacion}`,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error interno del servidor',
        });
    }
};

export const getUsuarioByType = async (req: Request, res: Response) => {
    const { type } = req.params; // Obteniendo la identificación de req

    console.log('Tipo: :', type);
    try {
        const usuario = await Usuario.findAll({
            where: {
                USU_TIPOUSUARIO: type,
            },
        });

        if (usuario) {
            res.json(usuario);
        } else {
            res.status(404).json({
                msg: `No existe un usuario con el tipo ${type}`,
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error interno del servidor',
        });
    }
};

export const updateUsuarioEstadoById = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el ID de req
    const { nuevoEstado } = req.body; // El nuevo estado que llega en el cuerpo de la solicitud

    console.log(id);
    console.log(nuevoEstado);

    try {
        console.log('Intentando actualizar el estado del usuario...');
        const [affectedCount] = await Usuario.update(
            { USU_ESTADO: nuevoEstado },
            {
                where: {
                    USU_ID: id,
                },
            }
        );

        console.log('Filas actualizadas:', affectedCount);
        
        if (affectedCount > 0) {
            const updatedUsuario = await Usuario.findByPk(id);
            res.json({
                msg: `Usuario con el ID ${id} actualizado exitosamente`,
                usuarioActualizado: updatedUsuario || null,
            });
            
        } else {
            res.status(404).json({
                msg: `No existe un usuario con el ID ${id}`,
            });
            
        }
        
    } catch (error) {
        console.error('Error durante la actualización del estado:', error);
        console.error(error);
        res.status(500).json({
            msg: 'Error interno del servidor',
        });
    }    
};


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
