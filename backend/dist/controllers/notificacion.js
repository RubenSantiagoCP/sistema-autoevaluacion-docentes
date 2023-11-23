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
exports.updateNotificacion = exports.createNotificacion = exports.deleteNotificacion = exports.getNotificacion = exports.getNotificaciones = void 0;
const notificacion_1 = __importDefault(require("../models/notificacion"));
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
    const { id } = req.params; // Obteniendo el id de req
    const notificacion = yield notificacion_1.default.findByPk(id); // Encuentra la notificacion por id
    if (notificacion) {
        res.json(notificacion);
    }
    else {
        res.status(404).json({
            msg: `No existe una notificacion con el id ${id}`
        });
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
        yield notificacion_1.default.create(body); // Crea la notificacion
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
const updateNotificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const { body } = req; // Obteniendo el id de req
    try {
        const notificacion = yield notificacion_1.default.findByPk(id); // Encuentra la notificacion por id
        if (notificacion) {
            yield notificacion.update(body);
            res.json({
                msg: 'La notificacion fue editado con exito!'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe una notificacion con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        });
    }
});
exports.updateNotificacion = updateNotificacion;
