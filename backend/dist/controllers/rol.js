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
exports.updateRol = exports.createRol = exports.deleteRol = exports.getRol = exports.getRoles = void 0;
const rol_1 = __importDefault(require("../models/rol"));
// Obtiene todos los roles
const getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // se usa Rol para tomar del modelo sequalize el metodo findAll() y guarda los Roles en la lista
    const listRoles = yield rol_1.default.findAll();
    // Enviar en el json el listado de roles
    res.json(listRoles);
});
exports.getRoles = getRoles;
// Obtiene un Rol por id
const getRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const rol = yield rol_1.default.findByPk(id); // Encuentra el rol por id
    if (rol) {
        res.json(rol);
    }
    else {
        res.status(404).json({
            msg: `No existe un rol con el id ${id}`
        });
    }
});
exports.getRol = getRol;
// Elimina un rol
const deleteRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const rol = yield rol_1.default.findByPk(id); // Encuentra el rol por id
    if (rol) {
        yield rol.destroy();
        res.json({
            msg: 'El rol fue eliminado con exito!'
        });
    }
    else {
        res.status(404).json({
            msg: `No existe un rol con el id ${id}`
        });
    }
});
exports.deleteRol = deleteRol;
// Crea un rol
const createRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req; // Obteniendo el id de req
    try {
        yield rol_1.default.create(body); // Crea el rol
        res.json({
            msg: 'El rol fue creado con exito'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        });
    }
});
exports.createRol = createRol;
// Actualiza los datos de un rol
const updateRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const { body } = req; // Obteniendo el id de req
    try {
        const rol = yield rol_1.default.findByPk(id); // Encuentra el rol por id
        if (rol) {
            yield rol.update(body);
            res.json({
                msg: 'El rol fue editado con exito!'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un rol con el id ${id}`
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
exports.updateRol = updateRol;
