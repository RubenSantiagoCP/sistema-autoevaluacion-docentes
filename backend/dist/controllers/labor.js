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
exports.updateLabor = exports.createLabor = exports.deleteLabor = exports.getLabor = exports.getLabores = void 0;
const labor_1 = __importDefault(require("../models/labor"));
// Obtiene todas las labores
const getLabores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // se usa Labor para tomar del modelo sequalize el metodo findAll() y guarda las labores en la lista
    const listLabores = yield labor_1.default.findAll();
    // Enviar en el json el listado de labores
    res.json(listLabores);
});
exports.getLabores = getLabores;
// Obtiene una labor por id
const getLabor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const labor = yield labor_1.default.findByPk(id); // Encuentra la labor por id
    if (labor) {
        res.json(labor);
    }
    else {
        res.status(404).json({
            msg: `No existe una labor con el id ${id}`
        });
    }
});
exports.getLabor = getLabor;
// Elimina una labor
const deleteLabor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const labor = yield labor_1.default.findByPk(id); // Encuentra la labor por id
    if (labor) {
        yield labor.destroy();
        res.json({
            msg: 'La labor fue eliminado con exito!'
        });
    }
    else {
        res.status(404).json({
            msg: `No existe una labor con el id ${id}`
        });
    }
});
exports.deleteLabor = deleteLabor;
// Crea una labor
const createLabor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req; // Obteniendo el id de req
    try {
        yield labor_1.default.create(body); // Crea la labor
        res.json({
            msg: 'La labor fue creada con exito'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        });
    }
});
exports.createLabor = createLabor;
// Actualiza los datos de una labor
const updateLabor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const { body } = req; // Obteniendo el id de req
    try {
        const labor = yield labor_1.default.findByPk(id); // Encuentra la labor por id
        if (labor) {
            yield labor.update(body);
            res.json({
                msg: 'La labor fue editado con exito!'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe una labor con el id ${id}`
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
exports.updateLabor = updateLabor;
