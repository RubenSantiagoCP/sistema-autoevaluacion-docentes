"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize"); // Para el tipo de datos
const connection_1 = __importDefault(require("../db/connection")); // Conexion sequalize
// Definir el modelo usuario que representa la tabla en la base de datos
class UsuarioModel extends sequelize_1.Model {
}
const Usuario = connection_1.default.define('usuario', {
    USU_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    USR_IDENTIFICACION: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    USU_NOMBRE: {
        type: sequelize_1.DataTypes.STRING
    },
    USU_APELLIDO: {
        type: sequelize_1.DataTypes.STRING
    },
    USU_GENERO: {
        type: sequelize_1.DataTypes.STRING
    },
    USU_ESTUDIO: {
        type: sequelize_1.DataTypes.STRING
    },
    USU_TIPOID: {
        type: sequelize_1.DataTypes.STRING
    },
    USU_FOTO: {
        type: sequelize_1.DataTypes.STRING
    },
    USU_CLAVE: {
        type: sequelize_1.DataTypes.STRING
    },
    USU_CORREO: {
        type: sequelize_1.DataTypes.STRING
    },
    USU_ESTADO: {
        type: sequelize_1.DataTypes.INTEGER
    },
    USU_TIPOUSUARIO: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    modelName: 'usuario'
});
exports.default = Usuario;
