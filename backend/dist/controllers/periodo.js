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
exports.updatePeriodo = exports.createPeriodo = exports.deletePeriodo = exports.getPeriodo = exports.getPeriodos = void 0;
const periodo_1 = __importDefault(require("../models/periodo"));
// Obtiene todos los periodos
const getPeriodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // se usa Periodo para tomar del modelo sequalize el metodo findAll() y guarda los Periodos en la lista
    const listPeriodos = yield periodo_1.default.findAll();
    // Enviar en el json el listado de periodo
    res.json(listPeriodos);
});
exports.getPeriodos = getPeriodos;
// Obtiene un periodo por id
const getPeriodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const periodo = yield periodo_1.default.findByPk(id); // Encuentra el periodo por id
    if (periodo) {
        res.json(periodo);
    }
    else {
        res.status(404).json({
            msg: `No existe un periodo con el id ${id}`
        });
    }
});
exports.getPeriodo = getPeriodo;
// Elimina un periodo
const deletePeriodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const periodo = yield periodo_1.default.findByPk(id); // Encuentra el periodo por id
    if (periodo) {
        yield periodo.destroy();
        res.json({
            msg: 'El periodo fue eliminado con exito!'
        });
    }
    else {
        res.status(404).json({
            msg: `No existe un periodo con el id ${id}`
        });
    }
});
exports.deletePeriodo = deletePeriodo;
// Crea un periodo
const createPeriodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req; // Obteniendo el id de req
    try {
        yield periodo_1.default.create(body); // Crea el periodo
        res.json({
            msg: 'El periodo fue creado con exito'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        });
    }
});
exports.createPeriodo = createPeriodo;
// Actualiza los datos de un periodo
const updatePeriodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const { body } = req; // Obteniendo el id de req
    try {
        const periodo = yield periodo_1.default.findByPk(id); // Encuentra el periodo por id
        if (periodo) {
            yield periodo.update(body);
            res.json({
                msg: 'El periodo fue editado con exito!'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un periodo con el id ${id}`
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
exports.updatePeriodo = updatePeriodo;
