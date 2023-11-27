"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize"); // Para el tipo de datos
const connection_1 = __importDefault(require("../db/connection")); // Conexion sequalize
// Definir el modelo UsuNotificacion que representa la tabla en la base de datos
const UsuNotificacion = connection_1.default.define('usunot', {
    USUNOT_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    USU_ID: {
        type: sequelize_1.DataTypes.INTEGER
    },
    NOT_ID: {
        type: sequelize_1.DataTypes.INTEGER
    },
    NOT_FECHA: {
        type: sequelize_1.DataTypes.DATE
    },
    NOT_ESTADO: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    createdAt: false, // Para no agregar las columnas a la base de datos
    updatedAt: false, // Para no agregar las columnas a la base de datos
    freezeTableName: true // El mismo nombre del  modelo al de la base de datos
});
exports.default = UsuNotificacion;
