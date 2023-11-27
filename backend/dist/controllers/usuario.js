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
exports.updateUsuario = exports.createUsuario = exports.deleteUsuario = exports.updateUsuarioEstadoById = exports.getUsuarioByType = exports.getUsuarioByIdentificacion = exports.getUsuario = exports.getUsuarios = exports.getUsuarioDetallado = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const userol_1 = __importDefault(require("../models/userol"));
const evaluacion_1 = __importDefault(require("../models/evaluacion"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const getUsuarioDetallado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuario_1.default.findAll({
            include: [{
                    model: userol_1.default,
                    include: [{
                            model: evaluacion_1.default,
                        }]
                }],
        })
            .then((usuarios) => {
            res.json(usuarios);
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
exports.getUsuarioDetallado = getUsuarioDetallado;
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
// Obtiene un usuario por USR_IDENTIFICACION
const getUsuarioByIdentificacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { identificacion } = req.params; // Obteniendo la identificación de req
    const identificacionNumber = parseFloat(identificacion);
    console.log('Identificación:', identificacionNumber);
    try {
        const usuario = yield usuario_1.default.findOne({
            where: {
                USR_IDENTIFICACION: identificacionNumber,
            },
        });
        if (usuario) {
            res.json(usuario);
        }
        else {
            res.status(404).json({
                msg: `No existe un usuario con la identificación ${identificacion}`,
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
exports.getUsuarioByIdentificacion = getUsuarioByIdentificacion;
const getUsuarioByType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { type } = req.params; // Obteniendo la identificación de req
    console.log('Tipo: :', type);
    try {
        const usuario = yield usuario_1.default.findAll({
            where: {
                USU_TIPOUSUARIO: type,
            },
        });
        if (usuario) {
            res.json(usuario);
        }
        else {
            res.status(404).json({
                msg: `No existe un usuario con el tipo ${type}`,
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
exports.getUsuarioByType = getUsuarioByType;
const updateUsuarioEstadoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params; // Obteniendo el ID de req
    const { nuevoEstado } = req.body; // El nuevo estado que llega en el cuerpo de la solicitud
    console.log(id);
    console.log(nuevoEstado);
    try {
        console.log('Intentando actualizar el estado del usuario...');
        const [affectedCount] = yield usuario_1.default.update({ USU_ESTADO: nuevoEstado }, {
            where: {
                USU_ID: id,
            },
        });
        console.log('Filas actualizadas:', affectedCount);
        if (affectedCount > 0) {
            const updatedUsuario = yield usuario_1.default.findByPk(id);
            res.json({
                msg: `Usuario con el ID ${id} actualizado exitosamente`,
                usuarioActualizado: updatedUsuario || null,
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un usuario con el ID ${id}`,
            });
        }
    }
    catch (error) {
        console.error('Error durante la actualización del estado:', error);
        console.error(error);
        res.status(500).json({
            msg: 'Error interno del servidor',
        });
    }
});
exports.updateUsuarioEstadoById = updateUsuarioEstadoById;
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
