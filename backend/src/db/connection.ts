import { Sequelize } from "sequelize";

const sequelize = new Sequelize('basededatosapp', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;