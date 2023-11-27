import { Request, Response } from 'express';
import Notificacion from '../models/notificacion';
import UsuNotificacion from '../models/usunot';
import Usuario from '../models/usuario';

export const getNotificacionDetallado = async (req: Request, res: Response) => {
    try{
        const notificaciones = await UsuNotificacion.findAll({
            include: [{
                model: Usuario,
            }, {
                model: Notificacion,
            }],
        })
            .then((notificaciones) => {
              res.json(notificaciones);   
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
// Obtiene todas las notificaciones
export const getNotificaciones = async (req: Request, res: Response) => {
    // se usa Notificacion para tomar del modelo sequalize el metodo findAll() y guarda las notificaciones en la lista
    const listNotificaciones = await Notificacion.findAll()

    // Enviar en el json el listado de notificaciones
    res.json(listNotificaciones)
}

// Obtiene una notificacion por id
export const getNotificacion = async (req: Request, res: Response) => {
    const usuId = req.params.id; // o req.userId si estás utilizando middleware de autenticación

    try {
        const notificaciones = await UsuNotificacion.findAll({
            where: { USU_ID: usuId },
            include: [{
                model: Usuario,
            }, {
                model: Notificacion,
            }],
            
        })
        .then((notificaciones) => {
            res.json(notificaciones);   
          })
          .catch((error) => {
            console.error('Error al realizar INNER JOIN:', error);
          });
    } catch (error) {
        console.error('Error al obtener notificaciones', error);
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
        const notificacion = await UsuNotificacion.create(body);

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
/*export const updateNotificacion = async (req: Request, res: Response) => {
    const { id } = req.params; // El ID de la UsuNotificacion
    const { nuevoEstado } = req.body; // El nuevo estado para la notificación

    try {
        // Encuentra la UsuNotificacion incluyendo la Notificacion asociada
        const usuNotificacion = await UsuNotificacion.findByPk(id, {
            include: [Notificacion]
        });

        if (usuNotificacion && usuNotificacion.Notificacion) {
            // Actualiza el estado de la Notificacion asociada
            await usuNotificacion.Notificacion.update({ NOT_ESTADO: nuevoEstado });
            res.json({
                msg: 'El estado de la notificación ha sido actualizado con éxito!'
            });
        } else {
            res.status(404).json({
                msg: `No se encontró una UsuNotificacion con el id ${id}`
            });
        } 
       
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Ocurrió un error, comuníquese con Ruben'
        });
    }
};*/
