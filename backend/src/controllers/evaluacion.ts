import { Request, Response } from 'express';
import Evaluacion from '../models/evaluacion';

// Obtiene todas las evaluaciones
export const getEvaluaciones = async (req: Request, res: Response) => {
    // se usa Evaluacion para tomar del modelo sequalize el metodo findAll() y guarda las evaluaciones en la lista
    const listEvaluaciones = await Evaluacion.findAll()

    // Enviar en el json el listado de evaluaciones
    res.json(listEvaluaciones)
}

// Obtiene una Evaluacion por id
export const getEvaluacion = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const evaluacion = await Evaluacion.findByPk(id); // Encuentra la Evaluacion por id

    if(evaluacion) {
        res.json(evaluacion)
    } else {
        res.status(404).json({
            msg: `No existe una Evaluacion con el id ${id}`
        })
    }
}

// Elimina una Evaluacion
export const deleteEvaluacion = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const evaluacion = await Evaluacion.findByPk(id); // Encuentra la Evaluacion por id

    if(evaluacion) {
        await evaluacion.destroy();
        res.json({
            msg: 'La Evaluacion fue eliminado con exito!'
        })
    } else {
        res.status(404).json({
            msg: `No existe una Evaluacion con el id ${id}`
        })
    }
}

// Crea una Evaluacion
export const createEvaluacion = async (req: Request, res: Response) => {
    const { body } = req; // Obteniendo el id de req

    try {
        await Evaluacion.create(body); // Crea la Evaluacion
        res.json({
            msg: 'La Evaluacion fue creada con exito'
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        })
    }
}

export const updateEvaluacion = async (req: Request, res: Response) => {
    const { id } = req.params; // Obteniendo el id de req
    const { body } = req; // Obteniendo el id de req

    try {
        const evaluacion = await Evaluacion.findByPk(id); // Encuentra la Evaluacion por id

        if(evaluacion) {
            await evaluacion.update(body);
            res.json({
                msg: 'La Evaluacion fue editado con exito!'
            })
        } else {
            res.status(404).json({
                msg: `No existe una Evaluacion con el id ${id}`
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        })
    }
}

export const getEvaluacionByUseRol = async (req: Request, res: Response) => {
    const { userol } = req.params; // Obteniendo la identificación de req
  
    try {
      const evaluacion = await Evaluacion.findAll({
        where: {
            USEROL_ID: userol,
        },
      });
  
      if (evaluacion.length > 0) {
        res.json(evaluacion);
      } else {
        res.status(404).json({
          msg: `No existen evaluaciones para el usuario con la identificación ${userol}`,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: 'Error interno del servidor',
      });
    }
  };
  
  export const getEvaluacionByPeriodoUser  = async (req: Request, res: Response) => {
    const { userol, periodo } = req.params; // Obteniendo la identificación de req
  
    try {
      const evaluacion = await Evaluacion.findAll({
        where: {
            USEROL_ID: userol,
            PER_ID: periodo,
        },
      });
  
      if (evaluacion.length > 0) {
        res.json(evaluacion);
      } else {
        res.status(404).json({
          msg: `No existen evaluaciones para el usuario con la identificación ${userol}`,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: 'Error interno del servidor',
      });
    }
  };
  