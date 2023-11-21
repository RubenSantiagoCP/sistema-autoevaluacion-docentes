import { DataTypes } from 'sequelize' // Para el tipo de datos
import db from '../db/connection'; // Conexion sequalize

// Definir el modelo evaluacion que representa la tabla en la base de datos
const Evaluacion = db.define('evaluacion', {
    EVA_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    LAB_ID : {
        type: DataTypes.DECIMAL
    },
    PER_ID : {
        type: DataTypes.DECIMAL
    },
    USEROL_ID : {
        type: DataTypes.DECIMAL
    },
    EVA_ESTADO : {
        type: DataTypes.INTEGER
    },
    EVA_PUNTAJE : {
        type: DataTypes.DECIMAL
    },
    EVA_RESULTADO : {
        type: DataTypes.STRING
    },
    EVA_EVIDENCIA : {
        type: DataTypes.STRING
    }
}, {
    createdAt: false, // Para no agregar las columnas a la base de datos
    updatedAt: false, // Para no agregar las columnas a la base de datos
    freezeTableName: true // El mismo nombre del  modelo al de la base de datos
});

export default Evaluacion;