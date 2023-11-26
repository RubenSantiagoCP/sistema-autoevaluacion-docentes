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
exports.login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const usuario_1 = __importDefault(require("../models/usuario")); // Asegúrate de importar tu modelo de usuario aquí
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Obtener credenciales del cuerpo de la solicitud
        const { correo, contrasena } = req.body;
        // Buscar el usuario en la base de datos
        const usuario = yield usuario_1.default.findOne({ where: { USU_CORREO: correo } });
        // Verificar si el usuario existe y si la contraseña es correcta
        if (usuario &&
            usuario.USU_CLAVE &&
            bcrypt_1.default.compareSync(contrasena, usuario.USU_CLAVE)) {
            // Generar un token JWT con información adicional del usuario
            const token = jsonwebtoken_1.default.sign({
                id: usuario.USU_ID,
                identificacion: usuario.USR_IDENTIFICACION,
                nombre: usuario.USU_NOMBRE,
                apellido: usuario.USU_APELLIDO,
                genero: usuario.USU_GENERO,
                estudio: usuario.USU_ESTUDIO,
                tipoId: usuario.USU_TIPOID,
                foto: usuario.USU_FOTO,
                correo: usuario.USU_CORREO,
                estado: usuario.USU_ESTADO,
                tipoUsu: usuario.USU_TIPOUSUARIO,
            }, "tu_secreto_secreto", { expiresIn: "1h" });
            // Enviar el token como respuesta
            res.json({ token });
        }
        else {
            // Si las credenciales son incorrectas, devolver un mensaje de error
            res.status(401).json({ message: "Credenciales incorrectas" });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
});
exports.login = login;
