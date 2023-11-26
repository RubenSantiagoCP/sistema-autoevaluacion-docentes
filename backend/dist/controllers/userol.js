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
exports.updateUseuserol = exports.createUseuserol = exports.deleteUseuserol = exports.getUseuserol = exports.getUseuseroles = void 0;
const userol_1 = __importDefault(require("../models/userol"));
// Obtiene todos los useroles
const getUseuseroles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // se usa Useuserol para tomar del modelo sequalize el metodo findAll() y guarda los Useuseroles en la lista
    const listUseuseroles = yield userol_1.default.findAll();
    // Enviar en el json el listado de useroles
    res.json(listUseuseroles);
});
exports.getUseuseroles = getUseuseroles;
// Obtiene un Userol por id
const getUseuserol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const userol = yield userol_1.default.findByPk(id); // Encuentra el userol por id
    if (userol) {
        res.json(userol);
    }
    else {
        res.status(404).json({
            msg: `No existe un userol con el id ${id}`
        });
    }
});
exports.getUseuserol = getUseuserol;
// Elimina un userol
const deleteUseuserol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const userol = yield userol_1.default.findByPk(id); // Encuentra el userol por id
    if (userol) {
        yield userol.destroy();
        res.json({
            msg: 'El userol fue eliminado con exito!'
        });
    }
    else {
        res.status(404).json({
            msg: `No existe un userol con el id ${id}`
        });
    }
});
exports.deleteUseuserol = deleteUseuserol;
// Crea un userol
const createUseuserol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req; // Obteniendo el id de req
    try {
        yield userol_1.default.create(body); // Crea el userol
        res.json({
            msg: 'El userol fue creado con exito'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        });
    }
});
exports.createUseuserol = createUseuserol;
// Actualiza los datos de un userol
const updateUseuserol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const { body } = req; // Obteniendo el id de req
    try {
        const userol = yield userol_1.default.findByPk(id); // Encuentra el userol por id
        if (userol) {
            yield userol.update(body);
            res.json({
                msg: 'El userol fue editado con exito!'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un userol con el id ${id}`
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
exports.updateUseuserol = updateUseuserol;
