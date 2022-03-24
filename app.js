const { Sequelize, DataTypes, Op } = require("sequelize");

const express = require('express');

const app = express(); //Se crea un aplicacion de express

const bodyParser = require ("body-parser");
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

const sequelize = require("./config/db"); //modulo externo de db

app.use("/v1", require("./routes"));

app.listen(process.env.PORT,() => {
  console.log(`Server on port ${process.env.PORT}`)
});
 
//Probando la conexion
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch {
  console.error("Unable to connect to the database:", error);
};

