const router = require("express").Router(); //router es un submodulo de express, definiendo el router para cada caso

router.get("/", (req,res) => { //pagina principal
    res.send ("Welcome to my API")
});

router.use("/drugs", require("./drugs")); 

module.exports = router;

