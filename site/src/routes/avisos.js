var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});
router.post("/listar1", function (req, res) {
    avisoController.listarhistorico(req, res);
});
module.exports = router;