import { DataTypes } from 'sequelize' // Para el tipo de datos
import db from '../db/connection'; // Conexion sequalize

// Definir el modelo Periodo que representa la tabla en la base de datos
const Periodo = db.define('periodo', {
    PER_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    PER_NOMBRE : {
        type: DataTypes.STRING
    }
    ,
    PER_FECHAINICIO : {
        type: DataTypes.DATE
    }
    ,
    PER_FECHAFIN : {
        type: DataTypes.DATE
    }
    ,
    PER_SEMESTRE : {
        type: DataTypes.INTEGER
    }
    ,
    PER_ESTADO : {
        type: DataTypes.INTEGER
    }
}, {
    createdAt: false, // Para no agregar las columnas a la base de datos
    updatedAt: false, // Para no agregar las columnas a la base de datos
    freezeTableName: true // El mismo nombre del  modelo al de la base de datos
});

export default Periodo;