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
exports.updateTipoLabor = exports.createTipoLabor = exports.deleteTipoLabor = exports.getTipoLabor = exports.getTipoLabores = void 0;
const tipoLabor_1 = __importDefault(require("../models/tipoLabor"));
// Obtiene todos los tipoLabores
const getTipoLabores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // se usa TipoLabor para tomar del modelo sequalize el metodo findAll() y guarda los TipoLabores en la lista
    const listTipoLabores = yield tipoLabor_1.default.findAll();
    // Enviar en el json el listado de tipoLabores
    res.json(listTipoLabores);
});
exports.getTipoLabores = getTipoLabores;
// Obtiene un tipoLabor por id
const getTipoLabor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const tipoLabor = yield tipoLabor_1.default.findByPk(id); // Encuentra el tipoLabor por id
    if (tipoLabor) {
        res.json(tipoLabor);
    }
    else {
        res.status(404).json({
            msg: `No existe un tipoLabor con el id ${id}`
        });
    }
});
exports.getTipoLabor = getTipoLabor;
// Elimina un tipoLabor
const deleteTipoLabor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const tipoLabor = yield tipoLabor_1.default.findByPk(id); // Encuentra el tipoLabor por id
    if (tipoLabor) {
        yield tipoLabor.destroy();
        res.json({
            msg: 'El tipoLabor fue eliminado con exito!'
        });
    }
    else {
        res.status(404).json({
            msg: `No existe un tipoLabor con el id ${id}`
        });
    }
});
exports.deleteTipoLabor = deleteTipoLabor;
// Crea un tipoLabor
const createTipoLabor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req; // Obteniendo el id de req
    try {
        yield tipoLabor_1.default.create(body); // Crea el tipoLabor
        res.json({
            msg: 'El tipoLabor fue creado con exito'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        });
    }
});
exports.createTipoLabor = createTipoLabor;
// Actualiza los datos de un tipoLabor
const updateTipoLabor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const { body } = req; // Obteniendo el id de req
    try {
        const tipoLabor = yield tipoLabor_1.default.findByPk(id); // Encuentra el tipoLabor por id
        if (tipoLabor) {
            yield tipoLabor.update(body);
            res.json({
                msg: 'El tipoLabor fue editado con exito!'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un tipoLabor con el id ${id}`
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
exports.updateTipoLabor = updateTipoLabor;
