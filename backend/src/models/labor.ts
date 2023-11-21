import { DataTypes } from 'sequelize' // Para el tipo de datos
import db from '../db/connection'; // Conexion sequalize

// Definir el modelo labor que representa la tabla en la base de datos
const Labor = db.define('labor', {
    LAB_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    TL_ID : {
        type: DataTypes.INTEGER
    },
    LAB_NOMBRE : {
        type: DataTypes.STRING
    },
    LAB_HORAS : {
        type: DataTypes.DECIMAL
    }
}, {
    createdAt: false, // Para no agregar las columnas a la base de datos
    updatedAt: false, // Para no agregar las columnas a la base de datos
    freezeTableName: true // El mismo nombre del  modelo al de la base de datos
});

export default Labor;