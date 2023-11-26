"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize"); // Para el tipo de datos
const connection_1 = __importDefault(require("../db/connection")); // Conexion sequalize
// Definir el modelo userol que representa la tabla en la base de datos
const Userol = connection_1.default.define('userol', {
    USEROL_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    USU_ID: {
        type: sequelize_1.DataTypes.INTEGER
    },
    ROL_ID: {
        type: sequelize_1.DataTypes.INTEGER
    },
    UR_FECHAINICIO: {
        type: sequelize_1.DataTypes.DATE
    },
    UR_FECHAFIN: {
        type: sequelize_1.DataTypes.DATE
    }
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true // El mismo nombre del  modelo al de la base de datos
});
exports.default = Userol;
