//Definiendo la conexion con mi base de datos
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USERDB,
  process.env.PASSWORD,
    {
      host: process.env.HOST,
      dialect: "postgres",
      native: true,
      ssl: true,
    });

module.exports = sequelize;
