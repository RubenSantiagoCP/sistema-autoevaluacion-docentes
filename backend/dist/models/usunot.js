"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize"); // Para el tipo de datos
const connection_1 = __importDefault(require("../db/connection")); // Conexion sequalize
const notificacion_1 = __importDefault(require("./notificacion"));
const usuario_1 = __importDefault(require("./usuario"));
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
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    modelName: 'usunot'
});
try {
    UsuNotificacion.belongsTo(usuario_1.default, { foreignKey: 'USU_ID' });
    usuario_1.default.hasMany(UsuNotificacion, { foreignKey: 'USU_ID' });
    UsuNotificacion.belongsTo(notificacion_1.default, { foreignKey: 'NOT_ID' });
    notificacion_1.default.hasMany(UsuNotificacion, { foreignKey: 'NOT_ID' });
}
catch (error) {
}
exports.default = UsuNotificacion;
