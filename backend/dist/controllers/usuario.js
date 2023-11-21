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
exports.updateUsuario = exports.createUsuario = exports.deleteUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// Obtiene todos los usuarios
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // se usa Usuario para tomar del modelo sequalize el metodo findAll() y guarda los usuarios en la lista
    const listUsuarios = yield usuario_1.default.findAll();
    // Enviar en el json el listado de usuarios
    res.json(listUsuarios);
});
exports.getUsuarios = getUsuarios;
// Obtiene un usuario por id
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const usuario = yield usuario_1.default.findByPk(id); // Encuentra el usuario por id
    if (usuario) {
        res.json(usuario);
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
});
exports.getUsuario = getUsuario;
// Elimina un usuario
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const usuario = yield usuario_1.default.findByPk(id); // Encuentra el usuario por id
    if (usuario) {
        yield usuario.destroy();
        res.json({
            msg: 'El usuario fue eliminado con exito!'
        });
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
});
exports.deleteUsuario = deleteUsuario;
// Crea un usuario
const createUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req; // Obteniendo el id de req
    try {
        // Hashear la contraseña antes de almacenarla
        const hashedPassword = bcrypt_1.default.hashSync(body.USU_CLAVE, 10); // '10' es el costo del hashing
        // Reemplazar la contraseña sin hashear con la hasheada
        body.USU_CLAVE = hashedPassword;
        // Crear el usuario con la contraseña hasheada
        yield usuario_1.default.create(body); // Crea el usuario
        res.json({
            msg: 'El usuario fue creado con exito'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ocurrio un error, comuniquese con Ruben'
        });
    }
});
exports.createUsuario = createUsuario;
const updateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el id de req
    const { body } = req; // Obteniendo el id de req
    try {
        const usuario = yield usuario_1.default.findByPk(id); // Encuentra el usuario por id
        if (usuario) {
            // Si se proporciona una nueva contraseña, hashearla antes de actualizar
            if (body.USU_CLAVE) {
                const hashedPassword = bcrypt_1.default.hashSync(body.USU_CLAVE, 10);
                body.USU_CLAVE = hashedPassword;
            }
            yield usuario.update(body);
            res.json({
                msg: 'El usuario fue editado con exito!'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un usuario con el id ${id}`
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
exports.updateUsuario = updateUsuario;
