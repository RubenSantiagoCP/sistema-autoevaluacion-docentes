import { DataTypes } from 'sequelize' // Para el tipo de datos
import db from '../db/connection'; // Conexion sequalize
import UsuNotificacion from './usunot';
import Usuario from './usuario';

// Definir el modelo Notificacion que representa la tabla en la base de datos
const Notificacion = db.define('notificacion', {
    NOT_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    NOT_TIPO : {
        type: DataTypes.STRING
    },
    NOT_DESCRIPCION : {
        type: DataTypes.STRING
    }
}, {
    createdAt: false, // Para no agregar las columnas a la base de datos
    updatedAt: false, // Para no agregar las columnas a la base de datos
    freezeTableName: true, // El mismo nombre del  modelo al de la base de datos
    modelName: 'notificacion'
});

Notificacion.hasMany(UsuNotificacion, { foreignKey: 'NOT_ID' });
UsuNotificacion.belongsTo(Notificacion, { foreignKey: 'NOT_ID' });

export default Notificacion;