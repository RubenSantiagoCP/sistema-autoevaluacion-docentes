"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize"); // Para el tipo de datos
const connection_1 = __importDefault(require("../db/connection")); // Conexion sequalize
// Definir el modelo Periodo que representa la tabla en la base de datos
const Periodo = connection_1.default.define('periodo', {
    PER_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    PER_NOMBRE: {
        type: sequelize_1.DataTypes.STRING
    },
    PER_FECHAINICIO: {
        type: sequelize_1.DataTypes.DATE
    },
    PER_FECHAFIN: {
        type: sequelize_1.DataTypes.DATE
    },
    PER_SEMESTRE: {
        type: sequelize_1.DataTypes.INTEGER
    },
    PER_ESTADO: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true // El mismo nombre del  modelo al de la base de datos
});
exports.default = Periodo;
