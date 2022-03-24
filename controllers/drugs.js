const { Sequelize, DataTypes, Op } = require("sequelize");
const Drug = require("../models/Drug");

//Crear un nuevo medicamento
function createDrug(req, res) {
    var body = req.body;
    Drug.create(body)
        .then((dug) =>
            res.status(201).send(drug)
        )
        .catch(error => res.status(500).send(error))
};

//Obtener producto
function getDrugs(req, res) {
    Drug.findAll()
    .then(drugs =>
        res.status(201).send(drugs)
    )
    .catch(error => res.status(500).send(error))
};

//Modificar registros
function modifyDrug(req, res) {
    var body = req.body;
    var id = req.params.id;
    Drug.update(body, {
        where: {
            id: id,
        }
    })
    .then(drug =>
         res.status(201).send(drug)
    )
    .catch(error => res.status(500).send(error))
};

//Eliminar registros
function deleteDrug(req, res) {
    var id = req.params.id;
    Drug.destroy({
        where: {
            id: id
        }
    })
    .then(res => 
        res.status(201).send("The drug was removed", id)
    )
    .catch(error => res.status(500).send(error))
};

//Se exportan las funciones definidas
module.exports = {
    createDrug,
    getDrugs,
    modifyDrug,
    deleteDrug,
};

//Crear medicamento
/* Drug.create({
  id: 21,
  name: "Krytantek Ofteno",
  dosage_form: "solución 20mg/ 5 mg/ 2 mg/mL caja con frasco gotero",
  alert_reason: "Falsificación de lotes 4020497, 4020050, 4020848, 4020329, 4021412, 4021617, 4020979, 4020733 y 4018893",
  use: "Indicaciones terapéuticas para la disminución a largo plazo de la presión intraocular de pacientes con glaucoma de ángulo abierto o con hipertensión ocular.",
  image: "https://ocufarma.mx/producto/krytantek-ofteno-5ml/",
  note: "A la población: en caso de contar con el producto Krytantek ofteno (Dorzolamida, Timolol, Brimonidina) solución 20 mg/5 mg/2 mg/mL, caja con frasco gotero, con los lotes antes mencionados, suspender su uso y contactar con el profesional de la salud para continuar con su tratamiento médico"
})
.then(res =>{ console.log(res)}); */

//Ejemplo consulta por producto
//SELECT * FROM public."Drug" WHERE name = "Krytantek Ofteno";
/* Drug.findAll({
    where: {
        name : "Krytantek Ofteno"
    }
})
.then(drugs =>
    console.log("El medicamento encontrado:", JSON.stringify(drugs, null, 2))
) */


//Ejemplo
/* Drug.update({ image: "https://sequelize.org/master/manual/validations-and-constraints.html", note: "Fui modificado desde el backend XD"  }, {
  where: {
    id: 1
  }
})
.then(res => { console.log(res) })  */

//Eliminar registros
//Ejemplo
/* Drug.destroy({
  where: {
    id: 2
  }
})
.then(res => { console.log(res) }) */

//Obtener por nombre
/* function getDrugsName(req, res) {
    var name = req.params.name
    Drug.findAll({
        where {
            name : name
        }
    })
    .then(drugs =>
        res.status(201).send(drugs)
    )
    .catch(error =>
     res.status(500).send(error)
     )
};
 */
