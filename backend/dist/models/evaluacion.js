"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize"); // Para el tipo de datos
const connection_1 = __importDefault(require("../db/connection")); // Conexion sequalize
const userol_1 = __importDefault(require("./userol"));
// Definir el modelo evaluacion que representa la tabla en la base de datos
const Evaluacion = connection_1.default.define('evaluacion', {
    EVA_ID: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    LAB_ID: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    PER_ID: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    USEROL_ID: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    EVA_ESTADO: {
        type: sequelize_1.DataTypes.INTEGER
    },
    EVA_PUNTAJE: {
        type: sequelize_1.DataTypes.DECIMAL
    },
    EVA_RESULTADO: {
        type: sequelize_1.DataTypes.STRING
    },
    EVA_EVIDENCIA: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    modelName: 'evaluacion'
});
Evaluacion.belongsTo(userol_1.default, { foreignKey: 'USEROL_ID' });
userol_1.default.hasMany(Evaluacion, { foreignKey: 'USEROL_ID' });
exports.default = Evaluacion;
