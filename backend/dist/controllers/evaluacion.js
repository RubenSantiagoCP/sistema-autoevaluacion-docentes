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
exports.getEvaluacionByPeriodoUser = exports.getEvaluacionByUseRol = exports.updateEvaluacion = exports.createEvaluacion = exports.deleteEvaluacion = exports.getEvaluacion = exports.getEvaluaciones = void 0;
const evaluacion_1 = __importDefault(require("../models/evaluacion"));
// Obtiene todas las evaluaciones
const getEvaluaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // se usa Evaluacion para tomar del modelo sequalize el metodo findAll() y guarda las evaluaciones en la lista
    const listEvaluaciones = yield evaluacion_1.default.findAll();
    // Enviar en el json el listado de evaluaciones
    res.json(listEvaluaciones);
});
exports.getEvaluaciones = getEvaluaciones;
// Obtiene una Evaluacion por id
const getEvaluacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const evaluacion = yield evaluacion_1.default.findByPk(id); // Encuentra la Evaluacion por id
    if (evaluacion) {
        res.json(evaluacion);
    }
    else {
        res.status(404).json({
            msg: `No existe una Evaluacion con el id ${id}`
        });
    }
});
exports.getEvaluacion = getEvaluacion;
// Elimina una Evaluacion
const deleteEvaluacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const evaluacion = yield evaluacion_1.default.findByPk(id); // Encuentra la Evaluacion por id
    if (evaluacion) {
        yield evaluacion.destroy();
        res.json({
            msg: 'La Evaluacion fue eliminado con exito!'
        });
    }
    else {
        res.status(404).json({
            msg: `No existe una Evaluacion con el id ${id}`
        });
    }
});
exports.deleteEvaluacion = deleteEvaluacion;
// Crea una Evaluacion
const createEvaluacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req; // Obteniendo el id de req
    try {
        yield evaluacion_1.default.create(body); // Crea la Evaluacion
        res.json({
            msg: 'La Evaluacion fue creada con exito'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        });
    }
});
exports.createEvaluacion = createEvaluacion;
const updateEvaluacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const { body } = req; // Obteniendo el id de req
    try {
        const evaluacion = yield evaluacion_1.default.findByPk(id); // Encuentra la Evaluacion por id
        if (evaluacion) {
            yield evaluacion.update(body);
            res.json({
                msg: 'La Evaluacion fue editado con exito!'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe una Evaluacion con el id ${id}`
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
exports.updateEvaluacion = updateEvaluacion;
const getEvaluacionByUseRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userol } = req.params; // Obteniendo la identificación de req
    try {
        const evaluacion = yield evaluacion_1.default.findAll({
            where: {
                USEROL_ID: userol,
            },
        });
        if (evaluacion.length > 0) {
            res.json(evaluacion);
        }
        else {
            res.status(404).json({
                msg: `No existen evaluaciones para el usuario con la identificación ${userol}`,
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error interno del servidor',
        });
    }
});
exports.getEvaluacionByUseRol = getEvaluacionByUseRol;
const getEvaluacionByPeriodoUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userol, periodo } = req.params; // Obteniendo la identificación de req
    try {
        const evaluacion = yield evaluacion_1.default.findAll({
            where: {
                USEROL_ID: userol,
                PER_ID: periodo,
            },
        });
        if (evaluacion.length > 0) {
            res.json(evaluacion);
        }
        else {
            res.status(404).json({
                msg: `No existen evaluaciones para el usuario con la identificación ${userol}`,
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error interno del servidor',
        });
    }
});
exports.getEvaluacionByPeriodoUser = getEvaluacionByPeriodoUser;
