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
exports.updateUsuNotificacion = exports.createUsuNotificacion = exports.deleteUsuNotificacion = exports.getUsuNotificacion = exports.getUsuNotificaciones = void 0;
const usunot_1 = __importDefault(require("../models/usunot"));
// Obtiene todas las usuNotificacions
const getUsuNotificaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // se usa UsuNotificacion para tomar del modelo sequalize el metodo findAll() y guarda las usuNotificacions en la lista
    const listUsuNotificaciones = yield usunot_1.default.findAll();
    // Enviar en el json el listado de usuNotificacions
    res.json(listUsuNotificaciones);
});
exports.getUsuNotificaciones = getUsuNotificaciones;
// Obtiene una usuNotificacion por id
const getUsuNotificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const usuNotificacion = yield usunot_1.default.findByPk(id); // Encuentra la usuNotificacion por id
    if (usuNotificacion) {
        res.json(usuNotificacion);
    }
    else {
        res.status(404).json({
            msg: `No existe una usuNotificacion con el id ${id}`
        });
    }
});
exports.getUsuNotificacion = getUsuNotificacion;
// Elimina una usuNotificacion
const deleteUsuNotificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const usuNotificacion = yield usunot_1.default.findByPk(id); // Encuentra la usuNotificacion por id
    if (usuNotificacion) {
        yield usuNotificacion.destroy();
        res.json({
            msg: 'La usuNotificacion fue eliminado con exito!'
        });
    }
    else {
        res.status(404).json({
            msg: `No existe una usuNotificacion con el id ${id}`
        });
    }
});
exports.deleteUsuNotificacion = deleteUsuNotificacion;
// Crea una usuNotificacion
const createUsuNotificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req; // Obteniendo el id de req
    try {
        yield usunot_1.default.create(body); // Crea la usuNotificacion
        res.json({
            msg: 'La usuNotificacion fue creada con exito'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        });
    }
});
exports.createUsuNotificacion = createUsuNotificacion;
// Actualiza los datos de una usuNotificacion
const updateUsuNotificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const { body } = req; // Obteniendo el id de req
    try {
        const usuNotificacion = yield usunot_1.default.findByPk(id); // Encuentra la usuNotificacion por id
        if (usuNotificacion) {
            yield usuNotificacion.update(body);
            res.json({
                msg: 'La usuNotificacion fue editado con exito!'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe una usuNotificacion con el id ${id}`
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
exports.updateUsuNotificacion = updateUsuNotificacion;
