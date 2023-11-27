import { DataTypes, Model } from 'sequelize' // Para el tipo de datos
import db from '../db/connection'; // Conexion sequalize

// Definir el modelo usuario que representa la tabla en la base de datos

class UsuarioModel extends Model {
    // Definición de propiedades del modelo
    public USU_ID!: number;
    public USR_IDENTIFICACION!: number;
    public USU_NOMBRE!: string;
    public USU_APELLIDO!: string;
    public USU_GENERO!: string;
    public USU_ESTUDIO!: string;
    public USU_TIPOID!: string;
    public USU_FOTO!: string;
    public USU_CLAVE!: string;
    public USU_CORREO!: string;
    public USU_ESTADO!: number;
    public USU_TIPOUSUARIO!: number; //
  
}
const Usuario = db.define<UsuarioModel>('usuario', {
    USU_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    USR_IDENTIFICACION : {
        type: DataTypes.DECIMAL
    },
    USU_NOMBRE : {
        type: DataTypes.STRING
    },
    USU_APELLIDO : {
        type: DataTypes.STRING
    },
    USU_GENERO : {
        type: DataTypes.STRING
    },
    USU_ESTUDIO : {
        type: DataTypes.STRING
    },
    USU_TIPOID : {
        type: DataTypes.STRING
    },
    USU_FOTO : {
        type: DataTypes.STRING
    },
    USU_CLAVE : {
        type: DataTypes.STRING
    },
    USU_CORREO : {
        type: DataTypes.STRING
    },
    USU_ESTADO : {
        type: DataTypes.INTEGER
    },
    USU_TIPOUSUARIO : {
        type: DataTypes.INTEGER
    } 
}, {
    createdAt: false, // Para no agregar las columnas a la base de datos
    updatedAt: false, // Para no agregar las columnas a la base de datos
    freezeTableName: true, // El mismo nombre del  modelo al de la base de datos
    modelName: 'usuario'
    
});
export default Usuario;