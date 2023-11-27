"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNotificacion = exports.deleteNotificacion = exports.getNotificacion = exports.getNotificaciones = exports.getNotificacionDetallado = void 0;
const notificacion_1 = __importDefault(require("../models/notificacion"));
const usunot_1 = __importDefault(require("../models/usunot"));
const usuario_1 = __importDefault(require("../models/usuario"));
const getNotificacionDetallado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notificaciones = yield usunot_1.default.findAll({
            include: [{
                    model: usuario_1.default,
                }, {
                    model: notificacion_1.default,
                }],
        })
            .then((notificaciones) => {
            res.json(notificaciones);
        })
            .catch((error) => {
            console.error('Error al realizar INNER JOIN:', error);
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con asd'
        });
    }
});
exports.getNotificacionDetallado = getNotificacionDetallado;
// Obtiene todas las notificaciones
const getNotificaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // se usa Notificacion para tomar del modelo sequalize el metodo findAll() y guarda las notificaciones en la lista
    const listNotificaciones = yield notificacion_1.default.findAll();
    // Enviar en el json el listado de notificaciones
    res.json(listNotificaciones);
});
exports.getNotificaciones = getNotificaciones;
// Obtiene una notificacion por id
const getNotificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuId = req.params.id; // o req.userId si estás utilizando middleware de autenticación
    try {
        const notificaciones = yield usunot_1.default.findAll({
            where: { USU_ID: usuId },
            include: [{
                    model: usuario_1.default,
                }, {
                    model: notificacion_1.default,
                }],
        })
            .then((notificaciones) => {
            res.json(notificaciones);
        })
            .catch((error) => {
            console.error('Error al realizar INNER JOIN:', error);
        });
    }
    catch (error) {
        console.error('Error al obtener notificaciones', error);
    }
});
exports.getNotificacion = getNotificacion;
// Elimina una notificacion
const deleteNotificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const notificacion = yield notificacion_1.default.findByPk(id); // Encuentra la notificacion por id
    if (notificacion) {
        yield notificacion.destroy();
        res.json({
            msg: 'La notificacion fue eliminado con exito!'
        });
    }
    else {
        res.status(404).json({
            msg: `No existe una notificacion con el id ${id}`
        });
    }
});
exports.deleteNotificacion = deleteNotificacion;
// Crea una notificacion
const createNotificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req; // Obteniendo el id de req
    try {
        const notificacion = yield usunot_1.default.create(body);
        res.json({
            msg: 'La notificacion fue creada con exito'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        });
    }
});
exports.createNotificacion = createNotificacion;
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
