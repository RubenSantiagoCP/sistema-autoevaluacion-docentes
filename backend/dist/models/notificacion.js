"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize"); // Para el tipo de datos
const connection_1 = __importDefault(require("../db/connection")); // Conexion sequalize
const usunot_1 = __importDefault(require("./usunot"));
// Definir el modelo Notificacion que representa la tabla en la base de datos
const Notificacion = connection_1.default.define('notificacion', {
    NOT_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    NOT_TIPO: {
        type: sequelize_1.DataTypes.STRING
    },
    NOT_DESCRIPCION: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    modelName: 'notificacion'
});
Notificacion.hasMany(usunot_1.default, { foreignKey: 'NOT_ID' });
usunot_1.default.belongsTo(Notificacion, { foreignKey: 'NOT_ID' });
exports.default = Notificacion;
