"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize"); // Para el tipo de datos
const connection_1 = __importDefault(require("../db/connection")); // Conexion sequalize
// Definir el modelo rol que representa la tabla en la base de datos
const Rol = connection_1.default.define('rol', {
    ROL_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    ROL_DESCRIPCION: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true // El mismo nombre del  modelo al de la base de datos
});
exports.default = Rol;
