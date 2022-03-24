const router = require("express").Router(); //router es un submodulo de express

const {
    createDrug,
    getDrugs,
    modifyDrug,
    deleteDrug,
} = require("../controllers/drugs")

router.get("/", getDrugs);
router.put("/", createDrug);
router.post("/:id", modifyDrug);
router.delete("/:id", deleteDrug);

module.exports = router;