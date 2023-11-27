import { DataTypes } from 'sequelize' // Para el tipo de datos
import db from '../db/connection'; // Conexion sequalize
import Notificacion from './notificacion';
import Usuario from './usuario';

// Definir el modelo UsuNotificacion que representa la tabla en la base de datos
const UsuNotificacion = db.define('usunot', {
    USUNOT_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    USU_ID : {
        type: DataTypes.INTEGER
    },
    NOT_ID : {
        type: DataTypes.INTEGER
    },
    NOT_FECHA : {
        type: DataTypes.DATE
    },
    NOT_ESTADO : {
        type: DataTypes.INTEGER
    }
}, {
    createdAt: false, // Para no agregar las columnas a la base de datos
    updatedAt: false, // Para no agregar las columnas a la base de datos
    freezeTableName: true, // El mismo nombre del  modelo al de la base de datos
    modelName: 'usunot'
});
try {
    UsuNotificacion.belongsTo(Usuario, { foreignKey: 'USU_ID' });
    Usuario.hasMany(UsuNotificacion, { foreignKey: 'USU_ID' });
    
    
    UsuNotificacion.belongsTo(Notificacion, { foreignKey: 'NOT_ID' });
    Notificacion.hasMany(UsuNotificacion, { foreignKey: 'NOT_ID' });
  }
    catch (error) {
    }


export default UsuNotificacion;