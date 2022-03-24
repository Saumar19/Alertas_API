const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../config/db"); //modulo externo de db

//Definiendo el modelo de Drug
const Drug = sequelize.define(
    "Drug",
    {
      //Definir las columnas, tipo de dato, identificar la llave primaria, ¿acepta null?
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.CHAR(200),
      },
      dosage_form: {
        type: DataTypes.TEXT,
      },
      alert_reason: {
        type: DataTypes.TEXT,
      },
      use: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.TEXT,
      },
      note: {
        type: DataTypes.TEXT,
      },
    },
    {
      freezeTableName: true, //El nombre del modelo corresponde con la tabla de db
      timestamps: false, //Bitácora de log, donde se guardan los cambios de db
    }
  );

  module.exports = Drug;
  