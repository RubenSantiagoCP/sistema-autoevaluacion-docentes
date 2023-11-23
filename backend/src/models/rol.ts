import { DataTypes } from 'sequelize' // Para el tipo de datos
import db from '../db/connection'; // Conexion sequalize

// Definir el modelo rol que representa la tabla en la base de datos
const Rol = db.define('rol', {
    ROL_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    ROL_DESCRIPCION : {
        type: DataTypes.STRING
    }
}, {
    createdAt: false, // Para no agregar las columnas a la base de datos
    updatedAt: false, // Para no agregar las columnas a la base de datos
    freezeTableName: true // El mismo nombre del  modelo al de la base de datos
});

export default Rol;