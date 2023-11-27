import { DataTypes } from 'sequelize' // Para el tipo de datos
import db from '../db/connection'; // Conexion sequalize
import Usuario from './usuario';
// Definir el modelo userol que representa la tabla en la base de datos
const Userol = db.define('userol', {
    USEROL_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    USU_ID : {
        type: DataTypes.INTEGER
    },
    ROL_ID : {
        type: DataTypes.INTEGER
    },
    UR_FECHAINICIO : {
        type: DataTypes.DATE
    },
    UR_FECHAFIN : {
        type: DataTypes.DATE
    }
}, {
    createdAt: false, // Para no agregar las columnas a la base de datos
    updatedAt: false, // Para no agregar las columnas a la base de datos
    freezeTableName: true, // El mismo nombre del  modelo al de la base de datos
    modelName: 'userol'
});
Userol.belongsTo(Usuario, { foreignKey: 'USU_ID' });
Usuario.hasMany(Userol, { foreignKey: 'USU_ID' });

export default Userol;